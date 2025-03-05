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
            this.Size = new Size(400, 600);
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.BackColor = Color.White;

            // Adding logo image
            PictureBox logo = new PictureBox()
            {
                Image = Image.FromFile("carolin.jfif"),
                SizeMode = PictureBoxSizeMode.StretchImage,
                Size = new Size(120, 120),
                Location = new Point(140, 20)
            };
            this.Controls.Add(logo);

            Label lblLogin = new Label()
            {
                Text = "Login",
                Font = new Font("Montserrat", 16, FontStyle.Bold),
                AutoSize = true,
                Location = new Point(165, 150)
            };
            this.Controls.Add(lblLogin);

            // Standard TextBoxes with Placeholder Behavior
            TextBox txtEmail = CreatePlaceholderTextBox("Email", new Point(37, 190));
            TextBox txtPassword = CreatePlaceholderTextBox("Password", new Point(37, 259), true);
            this.Controls.Add(txtEmail);
            this.Controls.Add(txtPassword);

            // Forgot Password
            Label lblForgotPassword = new Label()
            {
                Text = "Forgot Password?",
                ForeColor = Color.Blue,
                Font = new Font("Montserrat", 10, FontStyle.Underline),
                AutoSize = true,
                Location = new Point(240, 290),
                Cursor = Cursors.Hand
            };
            lblForgotPassword.Click += (sender, e) =>
            {
                this.Hide(); // Hide login form
                new FindAccountForm().ShowDialog(); // Open forgot password form
                this.Show(); // Show login form again after closing FindAccountForm
            };
            this.Controls.Add(lblForgotPassword);
            lblForgotPassword.BringToFront(); // Ensure visibility

            // Login Button
            Button btnLogin = new Button()
            {
                Text = "Login",
                Location = new Point(37, 320),
                Width = 326,
                Height = 56,
                BackColor = Color.FromArgb(242, 114, 43),
                ForeColor = Color.White,
                FlatStyle = FlatStyle.Flat
            };
            btnLogin.FlatAppearance.BorderSize = 0;
            this.Controls.Add(btnLogin);

            // OR Divider
            Label lblOr = new Label()
            {
                Text = "OR",
                ForeColor = Color.Gray,
                Font = new Font("Montserrat", 10, FontStyle.Bold),
                AutoSize = true,
                Location = new Point(180, 390)
            };
            this.Controls.Add(lblOr);

            // Social Login Buttons
            this.Controls.Add(CreateSocialIcon("facebook.png", new Point(90, 420)));
            this.Controls.Add(CreateSocialIcon("google.png", new Point(175, 420)));
            this.Controls.Add(CreateSocialIcon("x.png", new Point(260, 420)));

            // Sign-up Label (Navigates to SignUpForm)
            Label lblSignUp = new Label()
            {
                Text = "Don't have an Account? Sign Up",
                ForeColor = Color.FromArgb(242, 114, 43),
                Font = new Font("Montserrat", 9, FontStyle.Underline),
                AutoSize = true,
                Location = new Point(100, 480),
                Cursor = Cursors.Hand
            };
            lblSignUp.Click += (sender, e) => 
            {
                this.Hide();
                new SignUpForm().ShowDialog();
                this.Show();
            };
            this.Controls.Add(lblSignUp);
        }

        // Helper method for creating TextBoxes with placeholder behavior
        private TextBox CreatePlaceholderTextBox(string placeholder, Point location, bool isPassword = false)
        {
            TextBox textBox = new TextBox()
            {
                Text = placeholder,
                ForeColor = Color.Gray,
                Font = new Font("Montserrat", 10),
                Width = 326,
                Location = location
            };

            textBox.Enter += (s, e) =>
            {
                if (textBox.Text == placeholder)
                {
                    textBox.Text = "";
                    textBox.ForeColor = Color.Black;
                    if (isPassword) textBox.UseSystemPasswordChar = true;
                }
            };

            textBox.Leave += (s, e) =>
            {
                if (string.IsNullOrWhiteSpace(textBox.Text))
                {
                    textBox.Text = placeholder;
                    textBox.ForeColor = Color.Gray;
                    if (isPassword) textBox.UseSystemPasswordChar = false;
                }
            };

            return textBox;
        }

        // Helper method for creating social media icons
        private PictureBox CreateSocialIcon(string imagePath, Point location)
        {
            return new PictureBox()
            {
                Image = Image.FromFile(imagePath),
                SizeMode = PictureBoxSizeMode.StretchImage,
                Size = new Size(40, 40),
                Location = location
            };
        }
    }
}
