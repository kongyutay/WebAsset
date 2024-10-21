const items = document.querySelectorAll(".item");
const sortableList = document.querySelector(".sortable-list");

items.forEach(item => {
	item.addEventListener("dragstart", () => {
		item.classList.add("dragging");
	});
	
	item.addEventListener("dragend", () => {
		item.classList.remove("dragging");
	});
});

const initSortableList = (e) => {
	e.preventDefault(); //Dont know what is it for
	const draggingItem = sortableList.querySelector(".dragging");
	const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
	
	let nextSibling = siblings.find(sibling => {
		return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
	});
	
	sortableList.insertBefore(draggingItem, nextSibling);
}

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());