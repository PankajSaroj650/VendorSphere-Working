# VendorSphere - Working Version
Team Size: 3 | Web-based Vendor & Procurement Management System

## Files (alag-alag - sab alag language me)
- index.html  -> Structure only (HTML)
- style.css   -> Design only (CSS)
- script.js   -> Logic only (JavaScript)
- VendorManagementSystem.cpp -> C++ console version (alag project, optional)

## Kaise Chalaye (Sabse Aasan - 100% Working)
1. Is ZIP ko Extract karo
2. VendorSphere-Working folder kholo
3. index.html par DOUBLE CLICK karo - browser me khul jayega
4. Koi server / VS Code / internet ki zaroorat NAHI hai

## VS Code me chalana ho to:
- Folder ko VS Code me kholo
- index.html par right-click -> Open with Live Server (ya double-click)

## Features
Add, Edit, Delete, Search, Top Rated filter, Total Value stats, Export CSV, LocalStorage me auto-save (refresh ke baad bhi data rahega)

## C++ Version kaise chalaye
g++ VendorManagementSystem.cpp -o vendor
./vendor   (Windows: vendor.exe)

## Pehle wali file kyu nahi chali?
Pehli index.html me artifact ka extra system code mix ho gaya tha. Is wali me sirf tumhara code hai, isliye seedha chalegi.

## GitHub par push karna
git init
git add .
git commit -m "VendorSphere working version"
git branch -M main
git remote add origin <tumhara-repo-link>
git push -u origin main
