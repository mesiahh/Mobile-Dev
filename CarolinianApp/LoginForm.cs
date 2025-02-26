using System;
using System.Windows.Forms;
using System.Drawing;

namespace CarolinianApp
{
    public class LoginForm : Form
    {
        public LoginForm()
        {
            this.Text = "Login";
            this.Size = new Size(350, 500);
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            
            Label lblLogin = new Label()
            {
                Text = "Login",
                Font = new Font("Arial", 14, FontStyle.Bold),
                AutoSize = true,
                Location = new Point(140, 100)
            };
            this.Controls.Add(lblLogin);
            
            TextBox txtEmail = new TextBox() { PlaceholderText = "Email", Location = new Point(75, 140), Width = 200 };
            TextBox txtPassword = new TextBox() { PlaceholderText = "Password", Location = new Point(75, 180), Width = 200, PasswordChar = '*' };
            this.Controls.Add(txtEmail);
            this.Controls.Add(txtPassword);
            
            Label lblForgotPassword = new Label()
            {
                Text = "Forgot Password?",
                ForeColor = Color.FromArgb(0x5F, 0x5F, 0x5F), // Color #5F5F5F
                Font = new Font("Arial", 9, FontStyle.Underline),
                AutoSize = true,
                Location = new Point(75, 210),
                Cursor = Cursors.Hand // Makes it look clickable
            };
            lblForgotPassword.Click += (sender, e) => { new FindAccountForm().ShowDialog(); };
            this.Controls.Add(lblForgotPassword);

            Button btnLogin = new Button()
            {
                Text = "Login",
                Location = new Point(125, 240),
                Width = 100,
                BackColor = Color.FromArgb(0xF2, 0x72, 0x2B), // Color #F2722B
                ForeColor = Color.White
            };
            this.Controls.Add(btnLogin);

            Button btnSignUp = new Button()
            {
                Text = "Sign Up",
                Location = new Point(125, 280),
                Width = 100,
                BackColor = Color.Gray,
                ForeColor = Color.White
            };
            btnSignUp.Click += (sender, e) => { this.Hide(); new SignUpForm().ShowDialog(); this.Show(); };
            this.Controls.Add(btnSignUp);
        }
    }
}
