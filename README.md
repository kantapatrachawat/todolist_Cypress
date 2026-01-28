# To-Do List - Cypress Automate Test
โปรเจกต์นี้เป็นตัวอย่างการทำ **Automation Test ด้วย Cypress** สำหรับเว็บไซต์ https://abhigyank.github.io/To-Do-List/

ครอบคลุมการทดสอบฟังก์ชันหลัก เช่น
- เพิ่มรายการ To-Do
- ไม่อนุญาตให้เพิ่มรายการว่าง
- Mark งานเป็น Completed
- ลบรายการ

---

# Tool ที่ใช้
- Cypress
- Github
- Javascript
- Node.js

## การติดตั้ง Cypress 
1. ติดตั้ง Node.js
ตรวจสอบว่ามี Node.js
- node -v
- npm -v

ถ้ายังไม่มี สามารถดาวน์โหลดได้ที่ https://nodejs.org

2. git clone <repository-url>
cd TO-DO-LIST

3. ติดตั้ง dependencies
- npm install

## วิธีรัน Cypress
# วิธีที่1
1. เปิด cypress UI
- npm run cypress:open
2. กด spec
3. กด cypress
4. กด e2e
5. เลือก file todolist.cy.js

# วิธีที่2
1. รันแบบ headless(CLI) 
- npm run cypress:run

## โครงสร้างโปรเจ็กต์
TO-DO-LIST/
├── cypress/
│   ├── e2e/
│   │   └── todolist.cy.js        # Test cases หลัก
│   ├── fixtures/
│   │   └── example.json          # Test data (ถ้ามี)
│   ├── support/
│   └── utils/
│       ├── function.cy.js        # ฟังก์ชัน reusable เช่น addData
│       ├── selector.cy.js        # รวม selector เพื่อลด hardcode
│       └── setup.cy.js           # setup / common config
├── node_modules/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md


