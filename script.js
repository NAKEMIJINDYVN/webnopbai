// const taskTable = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
// const completedSpan = document.getElementById("completed");
// const pendingSpan = document.getElementById("pending");

// function updateDashboard() {
//     const checkboxes = document.querySelectorAll('.status');
//     let completed = 0;
//     checkboxes.forEach(cb => {
//         if(cb.checked) completed++;
//     });
//     completedSpan.textContent = completed;
//     pendingSpan.textContent = checkboxes.length - completed;
// }

// // Cập nhật dashboard khi checkbox thay đổi
// taskTable.addEventListener('change', function(e){
//     if(e.target.classList.contains('status')){
//         updateDashboard();
//     }
// });

// // Thêm công việc mới
// document.getElementById('addTask').addEventListener('click', function(){
//     const rowCount = taskTable.rows.length + 1;
//     const row = taskTable.insertRow();
//     row.innerHTML = `
//         <td>${rowCount}</td>
//         <td contenteditable="true">Nhập công việc</td>
//         <td contenteditable="true">Nhập tên</td>
//         <td><input type="checkbox" class="status"></td>
//     `;
// });

// // Xuất Excel
// document.getElementById('exportExcel').addEventListener('click', function(){
//     let tableHTML = taskTable.parentElement.outerHTML.replace(/ /g, '%20');
//     const filename = 'tasks.xls';
//     const downloadLink = document.createElement("a");
//     downloadLink.href = 'data:application/vnd.ms-excel,' + tableHTML;
//     downloadLink.download = filename;
//     downloadLink.click();
// });

// // Xuất Word
// document.getElementById('exportWord').addEventListener('click', function(){
//     let tableHTML = taskTable.parentElement.outerHTML;
//     const filename = 'tasks.doc';
//     const downloadLink = document.createElement("a");
//     downloadLink.href = 'data:application/msword,' + encodeURIComponent(tableHTML);
//     downloadLink.download = filename;
//     downloadLink.click();
// });

// updateDashboard();
