adminForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = adminForm["admin-email"].value;

  const addAdminRole = func.httpsCallable("addAdminRole");
  addAdminRole({ email }).then().catch(console.log);
});
