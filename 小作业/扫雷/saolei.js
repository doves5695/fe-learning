// function qipan() {
//     for(var i = 0; i < tr; i ++) {
//         latticetr.domContent = document.createElement("ul");
//         document.querySelector(".content").append(latticetr.domContent);
//     //     for(var j = 0; j < td; j ++) {
//     //     latticetd.domContent = document.createElement("li");
//     //     tdContent =  document.createElement("span");
//     //     document.querySelector("ul").append(latticetd.domContent);
//     //     document.querySelector("li").append(tdContent);
//     // }
// }
// for(var j = 0; j < td; j ++) {
//     latticetd.domContent = document.createElement("li");
//     document.querySelector("ul").append(latticetd.domContent);
//     tdContent =  document.createElement("span");
//     // document.querySelector("ul").append(latticetd.domContent);
//     document.querySelector("li").append(tdContent);
// }
// }
// qipan();
function qipan() {
    for(var i = 0; i < 9; i ++) {
        latticetr.domContent = document.createElement("ul");
        // latticetr.domContent.className = "hang";
        document.querySelector(".content").append(latticetr.domContent);
        for(var j = 0; j < 9; j ++) {
            latticetd.domContent = document.createElement("li");
            // latticetd.domContent.className = "lie";
            document.querySelector("ul").append(latticetd.domContent);
            tdContent.domContent = document.createElement("span");
            tdContent.domContent.textContent = "1";
            document.querySelector("li").append(tdContent.domContent);
        }
    }
}
qipan();