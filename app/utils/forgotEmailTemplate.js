function forgotEmail(info) {
  let TemplateDesign = `
      <h2>Forgot Password</h2> 
      <h4><a href="https://sbackend-jz2u.onrender.com/api/v1/backend/authentication/forgot-password/${info[0]}">Change Password</a></h4>
      `;
  return TemplateDesign;
}

module.exports = forgotEmail;
