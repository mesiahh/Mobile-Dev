using System;
using System.Windows.Forms;
using System.Drawing;

namespace CarolinianApp
{
    public class FindAccountForm : Form
    {
        public FindAccountForm()
        {
            this.Text = "Find Your Account";
            this.Size = new Size(350, 250);
            this.FormBorderStyle = FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;

            Label lblMessage = new Label()
            {
                Text = "Please enter your email to search for your account.",
                Font = new Font("Arial", 10),
                AutoSize = true,
                Location = new Point(40, 30)
            };
            this.Controls.Add(lblMessage);

            TextBox txtEmail = new TextBox() { PlaceholderText = "Enter Email", Location = new Point(40, 70), Width = 250 };
            this.Controls.Add(txtEmail);

            Button btnSearch = new Button() { Text = "Search", Location = new Point(100, 110), Width = 100, BackColor = Color.Orange, ForeColor = Color.White };
            btnSearch.Click += (sender, e) =>
            {
                MessageBox.Show("We have sent a notification to your email.", "Notification", MessageBoxButtons.OK, MessageBoxIcon.Information);
                this.Close(); // Close this form after the message
            };
            this.Controls.Add(btnSearch);

            Button btnBack = new Button() { Text = "Back to Login", Location = new Point(100, 150), Width = 100, BackColor = Color.Gray, ForeColor = Color.White };
            btnBack.Click += (sender, e) => { this.Close(); };
            this.Controls.Add(btnBack);
        }
    }
}
