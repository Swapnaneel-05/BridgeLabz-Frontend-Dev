class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  renderForm(targetId) {
    let html = `<form id="dynamicForm">`;

    this.fields.forEach(f => {
      html += `
        <label>${f.label}</label>
        <input type="${f.type}" id="${f.name}" placeholder="${f.label}">
        <br><br>
      `;
    });

    html += `<button type="submit">Submit</button></form>`;
    document.getElementById(targetId).innerHTML = html;

    // Form submit listener
    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(this.getFormData());
    });
  }

  getFormData() {
    let data = {};
    this.fields.forEach(f => {
      data[f.name] = document.getElementById(f.name).value;
    });
    return data;
  }
}

// Usage
const fields = [
  { type: "text", label: "Username", name: "username" },
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" }
];

const form = new FormBuilder(fields);
form.renderForm("formContainer");
