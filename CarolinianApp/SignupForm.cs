using System;
using System.Windows.Forms;
using System.Drawing;

namespace CarolinianApp
{
   public class SignUpForm : Form
    {
        public SignUpForm()
        {
            this.Text = "Sign Up";
            this.Size = new Size(350, 500);
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;

            // Adding logo image
            PictureBox logo = new PictureBox()
            {
                Image = Image.FromFile("carolin.jfif"), // Ensure the image exists in the directory
                SizeMode = PictureBoxSizeMode.StretchImage,
                Size = new Size(100, 100),
                Location = new Point(125, 20)
            };
            this.Controls.Add(logo);

            Label lblSignUp = new Label()
            {
                Text = "Sign Up",
                Font = new Font("Arial", 14, FontStyle.Bold),
                AutoSize = true,
                Location = new Point(140, 130)
            };
            this.Controls.Add(lblSignUp);

            TextBox txtUsername = new TextBox() { PlaceholderText = "Username", Location = new Point(75, 160), Width = 200 };
            TextBox txtEmail = new TextBox() { PlaceholderText = "Email", Location = new Point(75, 200), Width = 200 };
            TextBox txtPassword = new TextBox() { PlaceholderText = "Password", Location = new Point(75, 240), Width = 200, PasswordChar = '*' };
            TextBox txtConfirmPassword = new TextBox() { PlaceholderText = "Confirm Password", Location = new Point(75, 280), Width = 200, PasswordChar = '*' };
            
            this.Controls.Add(txtUsername);
            this.Controls.Add(txtEmail);
            this.Controls.Add(txtPassword);
            this.Controls.Add(txtConfirmPassword);

            Button btnSignUp = new Button() { Text = "Sign Up", Location = new Point(125, 320), Width = 100, BackColor = Color.Orange, ForeColor = Color.White };
            btnSignUp.Click += (sender, e) => { this.Hide(); new LoginForm().ShowDialog(); this.Show(); };
            this.Controls.Add(btnSignUp);
        }
    }
}
