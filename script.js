let vendors = JSON.parse(localStorage.getItem("vendors") || "[]");
let nextId = Number(localStorage.getItem("nextId") || 1);
const $ = id => document.getElementById(id);
function save(){ localStorage.setItem("vendors", JSON.stringify(vendors)); localStorage.setItem("nextId", nextId); }
function render(){
  const q = $("search").value.toLowerCase();
  const f = $("filter").value;
  let list = vendors.filter(v => (v.name+" "+v.company+" "+v.product).toLowerCase().includes(q));
  if(f==="top") list = list.filter(v => Number(v.rating) >= 4);
  $("tbody").innerHTML = list.map(v => `<tr><td>${v.id}</td><td>${v.name}</td><td>${v.company}</td><td>${v.product}</td><td>${v.phone||"-"}</td><td>${v.value||0}</td><td>${v.rating||0} ⭐</td><td><button onclick="editVendor(${v.id})">Edit</button> <button class="danger" onclick="deleteVendor(${v.id})">Delete</button></td></tr>`).join("");
  $("empty").style.display = list.length ? "none" : "block";
  const total = vendors.reduce((s,v)=>s+Number(v.value||0),0);
  $("stats").textContent = `Total Vendors: ${vendors.length} | Total Contract Value: Rs ${total} | Top Rated: ${vendors.filter(v=>Number(v.rating)>=4).length}`;
}
$("vendorForm").addEventListener("submit", e => {
  e.preventDefault();
  if($("phone").value && !/^[0-9]{10}$/.test($("phone").value)){ $("msg").textContent="Phone must be 10 digits"; return; }
  if($("rating").value && (Number($("rating").value)<0 || Number($("rating").value)>5)){ $("msg").textContent="Rating 0-5 ke beech honi chahiye"; return; }
  const data = { name:$("name").value.trim(), company:$("company").value.trim(), product:$("product").value.trim(), phone:$("phone").value.trim(), email:$("email").value.trim(), value:$("value").value||0, rating:$("rating").value||0 };
  const editId = $("editId").value;
  if(editId){ const i = vendors.findIndex(v=>v.id==editId); vendors[i] = {...vendors[i], ...data}; $("msg").textContent="Vendor Updated!"; }
  else { data.id = nextId++; vendors.push(data); $("msg").textContent="Vendor Added Successfully!"; }
  save(); render(); e.target.reset(); $("editId").value=""; $("saveBtn").textContent="Add Vendor"; $("cancelEdit").classList.add("hidden");
});
window.editVendor = id => { const v = vendors.find(x=>x.id===id); if(!v) return; ["name","company","product","phone","email","value","rating"].forEach(k=>$(k).value=v[k]); $("editId").value=v.id; $("saveBtn").textContent="Update Vendor"; $("cancelEdit").classList.remove("hidden"); window.scrollTo({top:0,behavior:"smooth"}); };
window.deleteVendor = id => { if(confirm("Delete this vendor?")){ vendors = vendors.filter(v=>v.id!==id); save(); render(); } };
$("cancelEdit").onclick = () => { $("vendorForm").reset(); $("editId").value=""; $("saveBtn").textContent="Add Vendor"; $("cancelEdit").classList.add("hidden"); };
$("search").oninput = render; $("filter").onchange = render;
$("clearBtn").onclick = () => { if(confirm("Delete ALL vendors?")){ vendors=[]; nextId=1; save(); render(); } };
$("exportBtn").onclick = () => { if(!vendors.length){ alert("No data to export"); return; } let csv="ID,Name,Company,Product,Phone,Email,Value,Rating\n"; vendors.forEach(v=>csv+=`${v.id},${v.name},${v.company},${v.product},${v.phone},${v.email},${v.value},${v.rating}\n`); const a=document.createElement("a"); a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"})); a.download="vendors.csv"; a.click(); };
render();