﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LauncherArma3
{
    static class Program
    {
        /// <summary>
        /// Point d'entrée principal de l'application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            /* GENERAL OPTIONS */

            string communityName = "TheDragonHeads";  /* Your serverName */
            string apiUrl = "http://5.1.89.10/"; /* Link to API launcher Arma 3 */

            /* FTP NO FUNCTIONAL */

            string ftp_url = "ftp://80.237.136.164/";
            string ftp_user = " ";
            string ftp_pass = " ";

            /* FTP NO FUNCTIONAL */

            bool modDev = true;  /* enable or disable modDev */

            /* ANOTHER VARIABLE */

            string appdata = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "/v5.";
            string sessionToken = null;

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            if (!Directory.Exists(appdata + communityName))
                Directory.CreateDirectory(appdata + communityName);
            if (File.Exists(appdata + communityName + "/language.lang"))
            {
                Application.Run(new loginForm(communityName, apiUrl, ftp_url, ftp_user, ftp_pass, modDev));
            }
            else
            {
                Application.Run(new languageChoice(communityName, false));
                Application.Run(new loginForm(communityName, apiUrl, ftp_url, ftp_user, ftp_pass, modDev));
            }
        }
    }
}
