# VendorSphere - Vendor & Procurement Management System

Team Size: 3 | Web-based Vendor Management System

VendorSphere helps businesses manage vendors, track procurement value,
rate vendors, and export data — all in the browser, no server needed.

**Live Demo:** Open `index.html` in any browser (or use Live Server in VS Code)
**Repo:** https://github.com/PankajSaroj650/VendorSphere-Working

## MVP Features (Evaluation 1 - First Cut)

- [x] Add Vendor
- [x] Edit Vendor
- [x] Delete Vendor
- [x] Search Vendors
- [x] Top Rated Filter
- [x] Dashboard Stats - Total Vendors, Total Value
- [x] Export CSV
- [x] Auto-save with LocalStorage (data stays after refresh)

## Tech Stack
- HTML - Structure
- CSS - Design / UI
- JavaScript - Logic + LocalStorage
- C++ - Console version (optional, in VendorManagementSystem.cpp)

## How to Run (Web Version - 100% Working)

1. Download / Clone this repo
2. Open folder `VendorSphere-Working`
3. Double-click `index.html` - it opens in browser
4. No server / internet needed

VS Code:
- Open folder in VS Code
- Right-click `index.html` -> Open with Live Server

## How to Run (C++ Version)

```bash
g++ VendorManagementSystem.cpp -o vendor
./vendor
