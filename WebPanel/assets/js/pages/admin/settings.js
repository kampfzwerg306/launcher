/**
 * Created by leohu on 13/08/2016.
 */

function switch_maintenance()
{
    var button = document.getElementById("maintenance");
    var label = document.getElementById("maintenance_state");

    if (label.textContent == "Activated")
    {
        $.post(
            '/api/switch/maintenance',
            {
                token : $("meta[name='token']").attr("content"),
                state : 0
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('success','top right','Maintenance deactivate', "Maintenance was been deactivated");
                    button.textContent = "Active maintenance";
                    label.className = "label label-danger";
                    label.textContent = "Deactivated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);
            },

            'text'
        );
    }
    else
    {
        $.post(
            '/api/switch/maintenance',
            {
                token : $("meta[name='token']").attr("content"),
                state : 1
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('warning','top right','Maintenance active', "Maintenance was been activated");
                    button.textContent = "Deactivate maintenance";
                    label.className = "label label-success";
                    label.textContent = "Activated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
}
function switch_login()
{
    var button = document.getElementById("login");
    var label = document.getElementById("login_state");

    if (label.textContent == "Activated")
    {
        $.post(
            '/api/switch/login',
            {
                token : $("meta[name='token']").attr("content"),
                state : 0
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('warning','top right','Login deactivate', "Login was been deactivated");
                    button.textContent = "Active login";
                    label.className = "label label-danger";
                    label.textContent = "Deactivated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
    else
    {
        $.post(
            '/api/switch/login',
            {
                token : $("meta[name='token']").attr("content"),
                state : 1
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('success','top right','Login activate', "Login was been activated");
                    button.textContent = "Deactivate login";
                    label.className = "label label-success";
                    label.textContent = "Activated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
}
function switch_register()
{
    var button = document.getElementById("register");
    var label = document.getElementById("register_state");

    if (label.textContent == "Activated")
    {
        $.post(
            '/api/switch/register',
            {
                token : $("meta[name='token']").attr("content"),
                state : 0
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('warning','top right','Register deactivate', "Register was been deactivated");
                    button.textContent = "Active register";
                    label.className = "label label-danger";
                    label.textContent = "Deactivated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
    else
    {
        $.post(
            '/api/switch/register',
            {
                token : $("meta[name='token']").attr("content"),
                state : 1
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('success','top right','Register activate', "Register was been activated");
                    button.textContent = "Deactivate register";
                    label.className = "label label-success";
                    label.textContent = "Activated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
}
function switch_taskforce()
{
    var button = document.getElementById("taskforce");
    var label = document.getElementById("taskforce_state");

    if (label.textContent == "Activated")
    {
        $.post(
            '/api/switch/taskforce',
            {
                token : $("meta[name='token']").attr("content"),
                state : 0
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('warning','top right','Taskforce deactivate', "Taskforce was been deactivated");
                    button.textContent = "Active register";
                    label.className = "label label-danger";
                    label.textContent = "Deactivated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
    else
    {
        $.post(
            '/api/switch/taskforce',
            {
                token : $("meta[name='token']").attr("content"),
                state : 1
            },

            function(data){
                var obj = JSON.parse(data);
                if (obj.status == 42)
                {
                    $.Notification.notify('success','top right','Taskforce activate', "Taskforce was been activated");
                    button.textContent = "Deactivate register";
                    label.className = "label label-success";
                    label.textContent = "Activated";
                }
                else if (obj.status == 41)
                    window.location="/logout";
                else if (obj.status == 44)
                    sweetAlert("Missing permission", obj.message, "error");
                else
                    $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);

            },

            'text'
        );
    }
}
function save_maintenance() {
    $.post(
        '/api/update/maintenance',
        {
            token : $("meta[name='token']").attr("content"),
            maintenance_title : document.getElementById("maintenance_title").value,
            maintenance_content : document.getElementById("maintenance_content").value
        },

        function(data){
            var obj = JSON.parse(data);
            if (obj.status == 42)
                $.Notification.notify('success','top right','Maintenance saved', obj.message);
            else if (obj.status == 41)
                window.location="/logout";
            else if (obj.status == 44)
                sweetAlert("Missing permission", obj.message, "error");
            else
                $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);
        },
        'text'
    );
}
function save_loginNews() {
    $.post(
        '/api/update/loginNews',
        {
            token : $("meta[name='token']").attr("content"),
            msg_title : document.getElementById("msg_title").value,
            msg_content : document.getElementById("msg_content").value
        },

        function(data){
            var obj = JSON.parse(data);
            if (obj.status == 42)
                $.Notification.notify('success','top right','Login News saved', obj.message);
            else if (obj.status == 41)
                window.location="/logout";
            else if (obj.status == 44)
                sweetAlert("Missing permission", obj.message, "error");
            else
                $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);
        },
        'text'
    );
}
function update_vmod() {
    var newVersion = parseFloat(document.getElementById("vmod").textContent) + 0.000001;
    $.post(
        '/api/update/vmod',
        {
            token : $("meta[name='token']").attr("content"),
            vmod : newVersion.toFixed(6)
        },

        function(data){
            var obj = JSON.parse(data);
            if (obj.status == 42)
            {
                $.Notification.notify('success','top right','New update created', obj.message);
                document.getElementById("vmod").textContent = newVersion.toFixed(6);
            }
            else if (obj.status == 41)
                window.location="/logout";
            else if (obj.status == 44)
                sweetAlert("Missing permission", obj.message, "error");
            else
                $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);
        },
        'text'
    );
}
function update_vtaskforce() {
    var newVersion = parseFloat(document.getElementById("vtaskforce").textContent) + 0.000001;
    $.post(
        '/api/update/vtaskforce',
        {
            token : $("meta[name='token']").attr("content"),
            vtaskforce : newVersion.toFixed(6)
        },

        function(data){
            var obj = JSON.parse(data);
            if (obj.status == 42)
            {
                $.Notification.notify('success','top right','New taskforce update created', obj.message);
                document.getElementById("vtaskforce").textContent = newVersion.toFixed(6);
            }
            else if (obj.status == 41)
                window.location="/logout";
            else if (obj.status == 44)
                sweetAlert("Missing permission", obj.message, "error");
            else
                $.Notification.notify('error','bottom center','Internal Error', "Error: " + obj.status + " | " + obj.message);
        },
        'text'
    );
}

var level = $("meta[name='level']").attr("content");

function checkLevel()
{
    if (level < 9)
        sweetAlert("Missing permission", "Yon don't have right to upload a new launcher", "error");
}
function escapeTags( str ) {
    return String( str )
        .replace( /&/g, '&amp;' )
        .replace( /"/g, '&quot;' )
        .replace( /'/g, '&#39;' )
        .replace( /</g, '&lt;' )
        .replace( />/g, '&gt;' );
}
window.onload = function() {
    $.get(
        '/api/settings',
        {
            launcher : 0
        },

        function(data){
            var obj = JSON.parse(data);

            if (obj.maintenance == 0)
            {
                var button = document.getElementById("maintenance");
                var label = document.getElementById("maintenance_state");

                button.textContent = "Active maintenance";
                label.className = "label label-danger";
                label.textContent = "Deactivated";
            }
            if (obj.taskforce == 0)
            {
                var button = document.getElementById("taskforce");
                var label = document.getElementById("taskforce_state");

                button.textContent = "Active taskforce";
                label.className = "label label-danger";
                label.textContent = "Deactivated";
            }
            if (obj.login == 0)
            {
                var button = document.getElementById("login");
                var label = document.getElementById("login_state");

                button.textContent = "Active login";
                label.className = "label label-danger";
                label.textContent = "Deactivated";
            }
            if (obj.register == 0)
            {
                var button = document.getElementById("register");
                var label = document.getElementById("register_state");

                button.textContent = "Active register";
                label.className = "label label-danger";
                label.textContent = "Deactivated";
            }

            document.getElementById("maintenance_title").value = obj.maintenance_title;
            document.getElementById("maintenance_content").value = obj.maintenance_content;
            document.getElementById("msg_title").value = obj.msg_title;
            document.getElementById("msg_content").value = obj.msg_content;
            document.getElementById("vlauncher").textContent = obj.vlauncher;
        },

        'text'
    );
    if (level < 9)
        disable();
    var btn = document.getElementById('uploadBtn'),
        progressBar = document.getElementById('progressBar'),
        progressOuter = document.getElementById('progressOuter'),
        msgBox = document.getElementById('msgBox');
    var uploader = new ss.SimpleUpload({
        button: btn,
        url: '/api/games/upload_launcher.php',
        name: 'uploadfile',
        allowedExtensions: ['exe'],
        multipart: true,
        maxSize: false,
        hoverClass: 'hover',
        focusClass: 'focus',
        responseType: 'json',
        startXHR: function() {
            progressOuter.style.display = 'block'; // make progress bar visible
            this.setProgressBar( progressBar );
        },
        onSubmit: function() {
            msgBox.innerHTML = ''; // empty the message box
            btn.innerHTML = 'Uploading...'; // change button text to "Uploading..."
        },
        onComplete: function( filename, response ) {
            btn.innerHTML = 'Choose Another File';
            progressOuter.style.display = 'none'; // hide progress bar when upload is completed
            if ( !response ) {
                msgBox.innerHTML = 'Unable to upload file';
                return;
            }
            if ( response.success === true ) {
                msgBox.innerHTML = '<strong>' + escapeTags( filename ) + '</strong>' + ' successfully uploaded.';
            } else {
                if ( response.msg )  {
                    msgBox.innerHTML = escapeTags( response.msg );
                } else {
                    msgBox.innerHTML = 'An error occurred and the upload failed.';
                }
            }
        },
        onError: function() {
            progressOuter.style.display = 'none';
            msgBox.innerHTML = 'Unable to upload file';
        }
    });
};