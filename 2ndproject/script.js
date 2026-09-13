<script>

const content = document.getElementById("content");

function icon(name){
  return `<i data-lucide="${name}" class="w-4 h-4"></i>`;
}

function renderIcons(){
  lucide.createIcons();
}

function showPage(page,button){

  document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));

  if(button) button.classList.add("active");

  document.getElementById("breadcrumb").innerText =
    page.charAt(0).toUpperCase()+page.slice(1);

  pages[page]();

  renderIcons();

  if(window.innerWidth < 900)
    document.getElementById("sidebar").classList.remove("show");
}


function stat(iconName,title,value,change,note){

return `
<div class="card p-4">

<div class="flex justify-between items-start">

<div class="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-500 grid place-items-center">
${icon(iconName)}
</div>

<span class="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
↗ ${change}
</span>

</div>

<h2 class="text-2xl font-bold mt-4">${value}</h2>

<p class="text-xs text-gray-500">${title}</p>

<p class="text-[9px] text-gray-400 mt-2">${note}</p>

</div>
`;
}


const pages = {

dashboard(){

content.innerHTML=`

<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-7">

<div>

<p class="text-[9px] text-indigo-500 font-bold tracking-widest">
TUESDAY, SEPTEMBER 8, 2026
</p>

<h1 class="text-3xl font-bold mt-2">
Good morning, Nishan 👋
</h1>

<p class="text-sm text-gray-400 mt-1">
Here's what's happening across your school today.
</p>

</div>

<div class="flex gap-2">

<button onclick="showToast('Report exported successfully')"
class="border bg-white px-4 py-2.5 rounded-lg text-xs font-semibold">
${icon("download")} Export
</button>

<button onclick="openModal('Add Student')"
class="bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2">
${icon("plus")} Add student
</button>

</div>

</div>


<div class="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-4">

${stat("graduation-cap","Total students","1,008","+8.2%","42 new this month")}

${stat("calendar-check","Attendance today","96.4%","+2.1%","972 students present")}

${stat("credit-card","Fee collection","NPR 18.6L","+12.8%","This month")}

${stat("alert-circle","Pending fees","NPR 3.2L","-6.4%","84 students")}

</div>


<div class="grid xl:grid-cols-3 gap-4">

<div class="card xl:col-span-2 p-5">

<div class="flex justify-between">

<div>

<h3 class="font-bold">School overview</h3>

<p class="text-xs text-gray-400 mt-1">
Student growth & attendance trend
</p>

</div>

<select class="border rounded-lg text-xs px-3 py-2">
<option>Last 6 months</option>
<option>This year</option>
</select>

</div>


<div class="h-64 mt-6">

<svg viewBox="0 0 800 250" class="w-full h-full">

<defs>
<linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#6366f1" stop-opacity=".25"/>
<stop offset="1" stop-color="#6366f1" stop-opacity="0"/>
</linearGradient>
</defs>

<path
d="M0 205 C100 190 120 170 200 180 S300 130 400 145 S500 90 600 105 S700 55 800 70 L800 250 L0 250Z"
fill="url(#area)"
/>

<path
d="M0 205 C100 190 120 170 200 180 S300 130 400 145 S500 90 600 105 S700 55 800 70"
fill="none"
stroke="#6366f1"
stroke-width="4"
/>

</svg>

</div>

<div class="flex gap-6 text-[10px] text-gray-400">
<span>● Students</span>
<span>● Attendance</span>
</div>

</div>


<div class="card p-5">

<h3 class="font-bold">Quick actions</h3>

<p class="text-xs text-gray-400 mt-1">
Frequently used tools
</p>

<div class="grid grid-cols-2 gap-2 mt-5">

${quick("graduation-cap","Add student")}
${quick("calendar-check","Attendance")}
${quick("megaphone","Create notice")}
${quick("video","Schedule class")}

</div>


<div class="border-t mt-5 pt-5">

<h3 class="font-bold text-sm">Today's schedule</h3>

${event("09:00","Grade 10 — Mathematics","Room 204 • Priya Adhikari")}
${event("11:30","Parent–teacher meeting","Conference hall")}
${event("14:00","Science online class","32 students enrolled")}

</div>

</div>

</div>


<div class="grid xl:grid-cols-2 gap-4 mt-4">

<div class="card p-5">

<div class="flex justify-between mb-4">

<div>
<h3 class="font-bold">Recent students</h3>
<p class="text-xs text-gray-400">Latest registrations</p>
</div>

<button class="text-indigo-500 text-xs font-bold">
View all →
</button>

</div>

${studentRow("AS","Aarav Sharma","Grade 10 • A","98%","Active")}
${studentRow("SK","Saanvi Karki","Grade 10 • A","96%","Active")}
${studentRow("RT","Rohan Thapa","Grade 9 • B","91%","Pending")}
${studentRow("AG","Anisha Gurung","Grade 10 • B","99%","Active")}

</div>


<div class="card p-5">

<h3 class="font-bold">Attendance today</h3>
<p class="text-xs text-gray-400">By grade</p>

${attendanceRow("Grade 10","98%")}
${attendanceRow("Grade 9","96%")}
${attendanceRow("Grade 8","95%")}
${attendanceRow("Grade 7","94%")}

</div>

</div>
`;
},


students(){

content.innerHTML=`

${header("Students","Manage student profiles, enrollment and academic records.","Add student")}

<div class="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-4">

${stat("graduation-cap","Total students","1,008","+8.2%","42 new")}

${stat("check-circle-2","Active","982","+3.1%","97.4% of total")}

${stat("trending-up","New admissions","42","+18%","This month")}

${stat("clock-3","Pending","26","-4%","Requires review")}

</div>


<div class="card p-5 overflow-hidden">

<div class="flex flex-col sm:flex-row gap-2 mb-4">

<div class="border rounded-lg px-3 h-9 flex items-center gap-2 flex-1">
${icon("search")}
<input id="studentSearch"
onkeyup="filterStudents()"
class="outline-none text-xs w-full"
placeholder="Search students...">
</div>

<button class="border rounded-lg px-3 text-xs flex items-center gap-2">
${icon("filter")} Filters
</button>

</div>

<div class="overflow-x-auto">

<table class="w-full text-xs">

<thead>
<tr class="text-left text-gray-400 border-b">
<th class="pb-3">Student</th>
<th>Class</th>
<th>Attendance</th>
<th>Fees</th>
<th>Status</th>
</tr>
</thead>

<tbody id="studentTable">

${studentsTable()}

</tbody>

</table>

</div>

</div>
`;
},


teachers(){

content.innerHTML=`

${header("Teachers","Manage faculty, departments and teaching assignments.","Add teacher")}

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

${teacher("PA","Priya Adhikari","Mathematics","8 years","98%")}
${teacher("SS","Suman Shrestha","Science","6 years","96%")}
${teacher("NB","Nisha Bhandari","English","5 years","99%")}
${teacher("KK","Kiran KC","Computer Science","4 years","97%")}
${teacher("RP","Ramesh Poudel","Social Studies","10 years","95%")}
${teacher("AL","Asha Lama","Accountancy","7 years","98%")}

</div>
`;
},


classes(){

content.innerHTML=`

${header("Classes & Subjects","Organize classes, sections, schedules and curriculum.","New class")}

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

${classCard("01","Grade 10 — A","32 students","8 subjects","Priya Adhikari")}
${classCard("02","Grade 10 — B","30 students","8 subjects","Suman Shrestha")}
${classCard("03","Grade 9 — A","34 students","9 subjects","Nisha Bhandari")}
${classCard("04","Grade 9 — B","31 students","9 subjects","Kiran KC")}
${classCard("05","Grade 8 — A","36 students","10 subjects","Ramesh Poudel")}
${classCard("06","Grade 8 — B","33 students","10 subjects","Asha Lama")}

</div>
`;
},


attendance(){

content.innerHTML=`

${header("Attendance","Track student attendance across every class.","Mark attendance")}

<div class="card p-6 mb-4 flex justify-between items-center">

<div>

<p class="text-[9px] text-indigo-500 font-bold tracking-widest">
TODAY • SEPTEMBER 8
</p>

<h2 class="text-4xl font-bold mt-2">
96.4%
</h2>

<p class="text-xs text-gray-400">
972 present • 24 absent • 12 late
</p>

</div>

<div class="w-24 h-24 rounded-full border-[10px] border-indigo-500 grid place-items-center">
<b class="text-xl text-indigo-600">96%</b>
</div>

</div>


<div class="card p-5">

<h3 class="font-bold">Class attendance</h3>

<div class="mt-4">

${attendanceDetailed("Grade 10 A",98)}
${attendanceDetailed("Grade 10 B",96)}
${attendanceDetailed("Grade 9 A",94)}
${attendanceDetailed("Grade 9 B",97)}
${attendanceDetailed("Grade 8 A",95)}
${attendanceDetailed("Grade 8 B",92)}

</div>

</div>
`;
},


assignments(){

content.innerHTML=`

${header("Assignments","Create, distribute and review student work.","Create assignment")}

<div class="space-y-3">

${assignment("Algebra worksheet","Mathematics","Grade 10 A","Due today","24/32","Due soon")}
${assignment("Photosynthesis report","Science","Grade 9 A","Sep 10","28/34","Active")}
${assignment("Essay: My future","English","Grade 10 B","Sep 12","18/30","Active")}
${assignment("Database design","Computer Science","Grade 10 A","Sep 14","31/32","Active")}

</div>
`;
},


exams(){

content.innerHTML=`

${header("Exams & Results","Manage examinations, grading and report cards.","Create exam")}

<div class="grid lg:grid-cols-2 gap-4">

<div class="card p-5">

<h3 class="font-bold">Upcoming exams</h3>
<p class="text-xs text-gray-400">September assessment schedule</p>

${exam("10","Mathematics Mid-Term","Grade 10 • 10:30 AM")}
${exam("12","Science Practical","Grade 9 • 11:00 AM")}
${exam("14","English Assessment","Grade 10 • 10:30 AM")}
${exam("16","Computer Science","Grade 10 • 1:00 PM")}

</div>


<div class="card p-5">

<h3 class="font-bold">Grade distribution</h3>
<p class="text-xs text-gray-400">Current term</p>

<div class="flex justify-center py-8">

<div class="w-44 h-44 rounded-full"
style="background:conic-gradient(#6366f1 0 38%,#818cf8 38% 69%,#a5b4fc 69% 88%,#c7d2fe 88% 100%);
display:grid;place-items:center">

<div class="bg-white w-24 h-24 rounded-full grid place-items-center text-center">
<b class="text-xl">89%</b>
<span class="text-[9px] text-gray-400">Avg score</span>
</div>

</div>

</div>

<div class="grid grid-cols-2 gap-2 text-xs text-gray-500">

<span>● Grade A <b>38%</b></span>
<span>● Grade B <b>31%</b></span>
<span>● Grade C <b>19%</b></span>
<span>● Grade D <b>12%</b></span>

</div>

</div>

</div>
`;
},


notices(){

content.innerHTML=`

${header("Notices","Keep students, parents and staff informed.","Create notice")}

<div class="space-y-3">

${notice("School reopens after Dashain break","All Students & Parents","Today • 08:30 AM","Published")}
${notice("Parent–Teacher meeting schedule","Grade 8–10 parents","Sep 7 • 03:15 PM","Published")}
${notice("Inter-house sports registration","All Students","Sep 6 • 11:20 AM","Published")}
${notice("Library books return reminder","Grade 9–10","Sep 5 • 09:10 AM","Draft")}

</div>
`;
},


fees(){

content.innerHTML=`

${header("Fees & Payments","Monitor collections, invoices and outstanding balances.","Create invoice")}

<div class="grid grid-cols-2 xl:grid-cols-4 gap-3 mb-4">

${stat("credit-card","Collected","NPR 18.6L","+12.8%","This month")}

${stat("clock-3","Outstanding","NPR 3.2L","-6.4%","84 students")}

${stat("trending-up","Collection rate","85.3%","+4.8%","vs last month")}

${stat("check-circle-2","Transactions","1,284","+9.1%","This month")}

</div>


<div class="card p-5 overflow-x-auto">

<h3 class="font-bold mb-4">Recent payments</h3>

<table class="w-full text-xs">

<thead>
<tr class="text-gray-400 text-left border-b">
<th class="pb-3">Student</th>
<th>Invoice</th>
<th>Date</th>
<th>Amount</th>
<th>Status</th>
</tr>
</thead>

<tbody>

${payment("Aarav Sharma","INV-2034","Sep 8","NPR 18,500","Paid")}
${payment("Saanvi Karki","INV-2033","Sep 8","NPR 24,000","Paid")}
${payment("Rohan Thapa","INV-2032","Sep 7","NPR 12,500","Pending")}
${payment("Anisha Gurung","INV-2031","Sep 7","NPR 22,000","Paid")}

</tbody>

</table>

</div>
`;
},


online(){

content.innerHTML=`

${header("Online Classes","Schedule and manage virtual learning sessions.","Schedule class")}

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

${video("Science — Photosynthesis","Suman Shrestha","Grade 9 A","Today • 02:00 PM")}
${video("Mathematics — Quadratic Equations","Priya Adhikari","Grade 10 A","Today • 04:00 PM")}
${video("Computer Science — SQL Basics","Kiran KC","Grade 10 B","Tomorrow • 10:30 AM")}

</div>
`;
},


messages(){

content.innerHTML=`

${header("Messages","Communicate with parents, students and staff.","New message")}

<div class="card overflow-hidden grid lg:grid-cols-[280px_1fr] min-h-[500px]">

<div class="border-r">

<div class="p-3">

<div class="border rounded-lg px-3 h-9 flex items-center gap-2">
${icon("search")}
<input class="outline-none text-xs w-full" placeholder="Search">
</div>

</div>

${conversation("GP","Grade 10 Parents","Regarding tomorrow's exam...")}
${conversation("PA","Priya Adhikari","The attendance has been updated.")}
${conversation("RT","Rohan Thapa's Parent","Could you share the fee details?")}
${conversation("FG","Faculty Group","Meeting at 3 PM confirmed.")}

</div>


<div class="flex flex-col">

<div class="p-4 border-b flex items-center gap-3">

<div class="avatar w-9 h-9 rounded-lg">GP</div>

<div>
<b class="text-xs">Grade 10 Parents</b>
<p class="text-[9px] text-gray-400">32 members</p>
</div>

</div>


<div class="flex-1 bg-gray-50 p-5">

<div class="bg-white border rounded-xl p-3 max-w-sm mb-3">
<b class="text-[9px]">Priya Adhikari</b>
<p class="text-xs mt-1">
Reminder: Mathematics mid-term is scheduled for Thursday.
</p>
<span class="text-[8px] text-gray-400">10:36 AM</span>
</div>


<div class="bg-indigo-600 text-white rounded-xl p-3 max-w-sm ml-auto">
<p class="text-xs">
Thanks. The updated syllabus has also been shared in the notice.
</p>
<span class="text-[8px] opacity-70">10:40 AM</span>
</div>

</div>


<div class="p-3 border-t flex gap-2">

<input
id="messageInput"
onkeydown="if(event.key==='Enter')sendMessage()"
class="border rounded-lg px-3 h-10 flex-1 text-xs outline-none"
placeholder="Write a message..."
>

<button onclick="sendMessage()"
class="bg-indigo-600 text-white w-10 rounded-lg grid place-items-center">
${icon("send")}
</button>

</div>

</div>

</div>
`;
},


analytics(){

content.innerHTML=`

${header("Analytics","Understand your school's performance at a glance.","Export report")}

<div class="grid lg:grid-cols-2 gap-4">

<div class="card p-5">

<h3 class="font-bold">Student performance</h3>
<p class="text-xs text-gray-400">Average score by grade</p>

<div class="h-72 flex items-end justify-around gap-5 px-5 pt-8">

${bar("76","Grade 7")}
${bar("81","Grade 8")}
${bar("84","Grade 9")}
${bar("89","Grade 10")}

</div>

</div>


<div class="card p-5">

<h3 class="font-bold">Key insights</h3>
<p class="text-xs text-gray-400">Current school data</p>

<div class="space-y-6 mt-7">

${insight("trending-up","Attendance improved","Grade 10 attendance is up 4.2% this month.")}

${insight("credit-card","Collections are healthy","Fee collection is 8% ahead of the monthly target.")}

${insight("alert-circle","Action needed","84 students have pending fee balances.")}

</div>

</div>

</div>
`;
},


settings(){

content.innerHTML=`

${header("Settings","Configure your school workspace and preferences.","Save changes")}

<div class="grid lg:grid-cols-[220px_1fr] gap-4">

<div class="card p-2 h-fit">

${["General","Academic year","Users & roles","Notifications","Billing","Security"].map((x,i)=>`
<button class="w-full text-left px-3 py-3 rounded-lg text-xs ${i===0?'bg-indigo-50 text-indigo-600 font-bold':''}">
${x}
</button>
`).join("")}

</div>


<div class="card p-6 max-w-2xl">

<h3 class="font-bold">General settings</h3>

<p class="text-xs text-gray-400 mb-6">
Basic information about your institution.
</p>

<label class="block text-xs text-gray-500 mb-4">
School name
<input value="Summit Valley School"
class="mt-2 border rounded-lg h-10 px-3 w-full outline-none">
</label>

<label class="block text-xs text-gray-500 mb-4">
School email
<input value="admin@summitvalley.edu"
class="mt-2 border rounded-lg h-10 px-3 w-full outline-none">
</label>

<label class="block text-xs text-gray-500 mb-6">
Timezone
<select class="mt-2 border rounded-lg h-10 px-3 w-full">
<option>Asia/Kathmandu (GMT +5:45)</option>
</select>
</label>

<button onclick="showToast('Settings saved successfully')"
class="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-xs font-bold">
Save changes
</button>

</div>

</div>
`;
}

};


// COMPONENT HELPERS

function header(title,desc,button){

return `

<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-7">

<div>

<p class="text-[9px] text-indigo-500 font-bold tracking-widest">
EDUVISION MANAGEMENT
</p>

<h1 class="text-3xl font-bold mt-2">${title}</h1>

<p class="text-sm text-gray-400 mt-1">${desc}</p>

</div>

<button onclick="openModal('${button}')"
class="bg-indigo-600 text-white px-4 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 w-fit">
${icon("plus")} ${button}
</button>

</div>
`;
}


function quick(i,t){

return `
<button onclick="showToast('${t} opened')"
class="border rounded-xl p-3 flex items-center gap-2 text-xs font-semibold hover:bg-indigo-50">
<div class="w-8 h-8 bg-indigo-50 text-indigo-500 rounded-lg grid place-items-center">
${icon(i)}
</div>
${t}
</button>
`;
}


function event(time,title,meta){

return `
<div class="flex gap-3 py-3 border-b last:border-0">
<span class="text-[9px] text-gray-400 w-10">${time}</span>
<div>
<b class="text-[10px]">${title}</b>
<p class="text-[9px] text-gray-400">${meta}</p>
</div>
</div>
`;
}


function studentRow(initials,name,grade,attendance,status){

return `
<div class="flex items-center py-3 border-b last:border-0">

<div class="avatar w-9 h-9 rounded-lg text-[10px]">${initials}</div>

<div class="ml-3 flex-1">
<b class="text-xs">${name}</b>
<p class="text-[9px] text-gray-400">${grade}</p>
</div>

<span class="text-[10px] text-green-600 font-bold">${attendance}</span>

<span class="ml-5 text-[9px] px-2 py-1 rounded bg-green-50 text-green-600">
${status}
</span>

</div>
`;
}


function attendanceRow(name,value){

return `
<div class="flex items-center gap-3 py-3 border-b last:border-0">

<span class="text-xs w-20">${name}</span>

<div class="flex-1 bg-gray-100 rounded-full h-1.5">
<div class="bg-indigo-500 h-full rounded-full" style="width:${value}"></div>
</div>

<b class="text-xs text-indigo-600">${value}</b>

</div>
`;
}


function studentsTable(){

let data=[
["AS","Aarav Sharma","ST-1024","Grade 10 • A","98%","NPR 24,500","Active"],
["SK","Saanvi Karki","ST-1025","Grade 10 • A","96%","NPR 0","Active"],
["RT","Rohan Thapa","ST-1026","Grade 9 • B","91%","NPR 8,500","Pending"],
["AG","Anisha Gurung","ST-1027","Grade 10 • B","99%","NPR 0","Active"],
["BR","Bibek Rai","ST-1028","Grade 8 • A","88%","NPR 12,000","Pending"],
["PJ","Prakriti Joshi","ST-1029","Grade 9 • A","94%","NPR 0","Active"]
];

return data.map(x=>`

<tr class="student border-b">

<td class="py-3">

<div class="flex items-center gap-3">

<div class="avatar w-8 h-8 rounded-lg text-[9px]">${x[0]}</div>

<div>
<b>${x[1]}</b>
<p class="text-[8px] text-gray-400">${x[2]}</p>
</div>

</div>

</td>

<td>${x[3]}</td>

<td class="text-green-600 font-bold">${x[4]}</td>

<td>${x[5]}</td>

<td>
<span class="${x[6]==='Active'?'bg-green-50 text-green-600':'bg-orange-50 text-orange-600'} px-2 py-1 rounded text-[9px]">
${x[6]}
</span>
</td>

</tr>

`).join("");
}


function filterStudents(){

let q=document.getElementById("studentSearch").value.toLowerCase();

document.querySelectorAll(".student").forEach(row=>{
row.style.display=row.innerText.toLowerCase().includes(q)?"":"none";
});

}


function teacher(initials,name,subject,experience,attendance){

return `
<div class="card p-5">

<div class="flex justify-between">
<div class="avatar w-12 h-12 rounded-xl">${initials}</div>
${icon("more-horizontal")}
</div>

<h3 class="font-bold mt-5">${name}</h3>
<p class="text-xs text-gray-400">${subject}</p>

<div class="flex gap-4 text-[9px] text-gray-400 my-5">
<span>◷ ${experience}</span>
<span>✓ ${attendance} attendance</span>
</div>

<button onclick="showToast('${name} profile opened')"
class="w-full border rounded-lg py-2 text-xs text-indigo-600 font-bold">
View profile →
</button>

</div>
`;
}


function classCard(num,name,students,subjects,teacher){

return `
<div class="card p-5">

<span class="text-[9px] text-gray-400 font-bold">${num}</span>

<h3 class="font-bold mt-3">${name}</h3>

<p class="text-[9px] text-gray-400">${students} • ${subjects}</p>

<div class="flex items-center gap-2 mt-6">

<div class="avatar w-8 h-8 rounded-lg text-[9px]">
${teacher.split(" ").map(x=>x[0]).join("")}
</div>

<div>
<p class="text-[8px] text-gray-400">Class teacher</p>
<b class="text-[9px]">${teacher}</b>
</div>

</div>

<div class="border-t mt-5 pt-3 flex justify-between">
<span class="text-[9px] text-gray-400">Next: 10:30 AM</span>
<button onclick="showToast('Class opened')" class="text-indigo-500 text-[9px] font-bold">
Manage →
</button>
</div>

</div>
`;
}


function attendanceDetailed(name,value){

return `
<div class="flex items-center gap-4 py-4 border-b">

<b class="text-xs w-24">${name}</b>

<span class="text-[9px] text-gray-400">32 students</span>

<div class="flex-1 bg-gray-100 h-2 rounded-full">
<div class="bg-indigo-500 h-full rounded-full" style="width:${value}%"></div>
</div>

<b class="text-xs text-indigo-600">${value}%</b>

<button onclick="showToast('${name} attendance opened')"
class="text-indigo-500 text-[9px] font-bold">
View
</button>

</div>
`;
}


function assignment(title,subject,grade,due,submitted,status){

return `
<div class="card p-4 flex items-center gap-4">

<div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 grid place-items-center">
${icon("clipboard-list")}
</div>

<div class="flex-1">

<p class="text-[8px] text-indigo-500 font-bold">
${subject} • ${grade}
</p>

<h3 class="font-bold text-sm">${title}</h3>

<p class="text-[9px] text-gray-400 mt-1">
${due} • ${submitted} submitted
</p>

</div>

<span class="text-[9px] px-2 py-1 rounded bg-green-50 text-green-600">
${status}
</span>

</div>
`;
}


function exam(day,title,meta){

return `
<div class="flex items-center gap-3 py-3 border-b">

<div class="w-10 h-11 bg-indigo-50 text-indigo-600 rounded-lg grid place-items-center">
<b>${day}</b>
<span class="text-[7px]">SEP</span>
</div>

<div class="flex-1">
<b class="text-xs">${title}</b>
<p class="text-[9px] text-gray-400">${meta}</p>
</div>

<span class="text-[9px] text-gray-400">Soon</span>

</div>
`;
}


function notice(title,target,date,status){

return `
<div class="card p-4 flex items-center gap-4">

<div class="w-10 h-10 bg-indigo-50 text-indigo-500 rounded-xl grid place-items-center">
${icon("megaphone")}
</div>

<div class="flex-1">

<p class="text-[8px] text-gray-400">${target}</p>

<h3 class="font-bold text-xs mt-1">${title}</h3>

<p class="text-[9px] text-gray-400 mt-1">${date}</p>

</div>

<span class="text-[9px] px-2 py-1 rounded
${status==='Published'?'bg-green-50 text-green-600':'bg-gray-100 text-gray-500'}">
${status}
</span>

</div>
`;
}


function payment(student,invoice,date,amount,status){

return `
<tr class="border-b">

<td class="py-4 font-semibold">${student}</td>
<td>${invoice}</td>
<td>${date}</td>
<td class="font-bold">${amount}</td>

<td>
<span class="px-2 py-1 rounded text-[9px]
${status==='Paid'?'bg-green-50 text-green-600':'bg-orange-50 text-orange-600'}">
${status}
</span>
</td>

</tr>
`;
}


function video(title,teacher,grade,date){

return `
<div class="card overflow-hidden">

<div class="h-32 bg-gradient-to-br from-indigo-950 to-indigo-500 grid place-items-center text-white">
${icon("video")}
</div>

<div class="p-4">

<p class="text-[8px] text-indigo-500 font-bold">${grade}</p>

<h3 class="font-bold text-sm mt-1">${title}</h3>

<p class="text-[9px] text-gray-400 mt-2">
${teacher} • ${date}
</p>

<div class="flex justify-between items-center mt-4">

<span class="text-[9px] text-gray-400">
32 enrolled
</span>

<button onclick="showToast('Meeting link copied')"
class="bg-indigo-600 text-white px-3 py-2 rounded-lg text-[9px] font-bold">
Copy link
</button>

</div>

</div>

</div>
`;
}


function conversation(initials,name,message){

return `
<button class="w-full p-3 flex gap-3 text-left hover:bg-indigo-50">

<div class="avatar w-9 h-9 rounded-lg text-[9px]">${initials}</div>

<div class="flex-1">

<b class="text-[10px]">${name}</b>

<p class="text-[8px] text-gray-400 truncate">
${message}
</p>

</div>

</button>
`;
}


function bar(value,label){

return `
<div class="flex flex-col items-center gap-2 h-full justify-end">

<div class="w-10 bg-indigo-500 rounded-t-lg"
style="height:${value*2.2}px">
</div>

<b class="text-xs">${value}%</b>

<span class="text-[9px] text-gray-400">${label}</span>

</div>
`;
}


function insight(iconName,title,text){

return `
<div class="border-b pb-5">

<div class="text-indigo-500 mb-2">
${icon(iconName)}
</div>

<b class="text-xs">${title}</b>

<p class="text-[9px] text-gray-400 mt-1">
${text}
</p>

</div>
`;
}


function openModal(title){

document.getElementById("modalTitle").innerText=title;

document.getElementById("modal").classList.remove("hidden");
document.getElementById("modal").classList.add("grid");

renderIcons();

}


function closeModal(){

document.getElementById("modal").classList.add("hidden");
document.getElementById("modal").classList.remove("grid");

}


function saveRecord(){

closeModal();

showToast("Record saved successfully");

}


function showToast(message){

let toast=document.getElementById("toast");

toast.innerText="✓  "+message;

toast.classList.remove("hidden");

setTimeout(()=>{
toast.classList.add("hidden");
},2500);

}


function sendMessage(){

let input=document.getElementById("messageInput");

if(input.value.trim()){

showToast("Message sent");

input.value="";

}

}


function toggleSidebar(){

document.getElementById("sidebar").classList.toggle("show");

}


// INITIALIZE

pages.dashboard();

renderIcons();

</script>