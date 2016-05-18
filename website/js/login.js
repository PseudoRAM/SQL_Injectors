var isVisible = false;

$(document).ready(function() {
    LoginModalController.initialize();
});

$(document).ready(function() {
    $('#hideshow').on('click', function(event) {
        $('#login').fadeToggle('show');
        isVisible = !isVisible;
    });
});

var LoginModalController = {
    tabsElementName: ".login__tabs li",
    tabElementName: ".login__tab",
    inputElementsName: ".login__form .input",
    hidePasswordName: ".hide-password",

    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second

    findElements: function() {
        var base = this;

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function(state) {
        var base = this,
            elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
            elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }

        return base;
    },

    getActiveTab: function() {
        var base = this;

        base.tabsElement.each(function(i, el) {
            if ($(el).hasClass("current")) {
                base.activeTab = $(el);
            }
        });

        return base;
    },

    addClickEvents: function() {
        var base = this;

        base.hidePassword.on("click", function(e) {
            var $this = $(this),
                $pwInput = $this.prev("input");

            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });

        base.tabsElement.on("click", function(e) {
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function(i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });

        base.inputElements.find("label").on("click", function(e) {
            var $this = $(this),
                $input = $this.next("input");

            $input.focus();
        });

        return base;
    },

    initialize: function() {
        var base = this;

        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$( "#loginBtn" ).click(function() {

    var dataPass = {username : document.getElementById("user-email2").value, passd : document.getElementById("user-pw2").value};

    $.ajax({
        url : "php/login.php",
        type : "GET",
        data : dataPass,
        success : function(data) {
            if (data === "success\n") {
                alert("You've successfully logged in");
            }
            else {
                alert("Invalid username or password");
            }
        }
    });

});

$("#registerBtn").click(function() {

    var dataPass = {useremail : document.getElementById("user-email").value, passd : document.getElementById("user-pw").value, passd2 : document.getElementById("user-pw-repeat").value};

    $.ajax({
        url : "php/register.php",
        type : "GET",
        data : dataPass,
        success : function(data) {

            if (data === "success\n") {
                alert("You've successfully logged in");
            }
            else {
                alert("Invalid username or password");
            }
        }
    });

});
