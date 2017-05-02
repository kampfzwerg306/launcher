namespace LauncherArma3
{
    partial class languageChoice
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(languageChoice));
            this.germanFlag = new System.Windows.Forms.PictureBox();
            this.englishFlag = new System.Windows.Forms.PictureBox();
            this.animation = new System.ComponentModel.BackgroundWorker();
            ((System.ComponentModel.ISupportInitialize)(this.germanFlag)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.englishFlag)).BeginInit();
            this.SuspendLayout();
            // 
            // germanFlag
            // 
            this.germanFlag.Cursor = System.Windows.Forms.Cursors.Hand;
            this.germanFlag.Image = ((System.Drawing.Image)(resources.GetObject("germanFlag.Image")));
            this.germanFlag.Location = new System.Drawing.Point(359, 73);
            this.germanFlag.Name = "germanFlag";
            this.germanFlag.Size = new System.Drawing.Size(222, 157);
            this.germanFlag.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.germanFlag.TabIndex = 11;
            this.germanFlag.TabStop = false;
            this.germanFlag.Click += new System.EventHandler(this.germanFlag_Click);
            this.germanFlag.MouseEnter += new System.EventHandler(this.setDeutch);
            // 
            // englishFlag
            // 
            this.englishFlag.Cursor = System.Windows.Forms.Cursors.Hand;
            this.englishFlag.Image = ((System.Drawing.Image)(resources.GetObject("englishFlag.Image")));
            this.englishFlag.Location = new System.Drawing.Point(90, 73);
            this.englishFlag.Name = "englishFlag";
            this.englishFlag.Size = new System.Drawing.Size(222, 157);
            this.englishFlag.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.englishFlag.TabIndex = 9;
            this.englishFlag.TabStop = false;
            this.englishFlag.Click += new System.EventHandler(this.englishFlag_Click);
            this.englishFlag.MouseEnter += new System.EventHandler(this.setEnglish);
            // 
            // animation
            // 
            this.animation.DoWork += new System.ComponentModel.DoWorkEventHandler(this.animation_DoWork);
            this.animation.RunWorkerCompleted += new System.ComponentModel.RunWorkerCompletedEventHandler(this.refresh);
            // 
            // languageChoice
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(687, 399);
            this.Controls.Add(this.germanFlag);
            this.Controls.Add(this.englishFlag);
            this.Cursor = System.Windows.Forms.Cursors.IBeam;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "languageChoice";
            this.Resizable = false;
            this.Style = MetroFramework.MetroColorStyle.Silver;
            this.Text = "Select your language";
            this.TextAlign = MetroFramework.Forms.MetroFormTextAlign.Center;
            this.Theme = MetroFramework.MetroThemeStyle.Dark;
            this.FormClosed += new System.Windows.Forms.FormClosedEventHandler(this.close);
            this.Load += new System.EventHandler(this.languageChoice_Load);
            ((System.ComponentModel.ISupportInitialize)(this.germanFlag)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.englishFlag)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.PictureBox germanFlag;
        private System.Windows.Forms.PictureBox englishFlag;
        private System.ComponentModel.BackgroundWorker animation;
    }
}