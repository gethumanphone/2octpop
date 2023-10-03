function getVariableFromURl(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results == null)
                return "";
            else
                return results[1];
        }

        var phone = getVariableFromURl('phone');
        var phone_number = phone + ' (Toll Free)';
        var phone_number2 = phone + ' (Toll Free)';