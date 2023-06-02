const notification = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

//get data from this json array.
const toastDetails = {
	timer: 5000,
	success: {
		icon: "fa-circle-check",
		text: "Success: This is a success toast."
	},
	error: {
		icon: "fa-circle-xmark",
		text: "Error: This is a error toast."
	},
	warning: {
		icon: "fa-triangle-exclamation",
		text: "Warning: This is a warning toast."
	},
	danger: {
		icon: "fa-circle-info",
		text: "Info: This is a informaiton toast."
	}
}

const createToast = (id) => {
	const { icon, text } = toastDetails[id];	
	const toast = document.createElement("li");
	toast.className = `toast ${id}`;
	
	toast.innerHTML = `
	<div class="column">
		<i class="fa-solid ${icon}"></i>
		<span>${text}</span>
	</div>
	<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
	`;
	
	notification.appendChild(toast);
	
	toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

const removeToast = (toast) => {
	//Add a 'hide' class to toast
	toast.classList.add("hide");
	
	//Clear timeout is used to cancel a timeout previously set with the setTimeout function.
	//When  schedule a function to be executed after a specified amount of time. The setTimeout function returns a unique identifier, known as a "timeout ID," which can be used to cancel the execution of the scheduled function before it runs.

	if(toast.timeoutId) {
		clearTimeout(toast.timeoutId)
	};
		
	setTimeout(() => toast.remove(), 500);
}

//Use forEach loop to assign event listener to each button
buttons.forEach(btn => {
	btn.addEventListener("click", () => createToast(btn.id));
});