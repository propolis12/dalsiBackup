<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* base.html.twig */
class __TwigTemplate_8642fa0bd79d749470198aab36db383efd063da0c109f6843668c5ae9fefac41 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
            'stylesheets' => [$this, 'block_stylesheets'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html>
    <head>

        <meta charset=\"UTF-8\">
        <title>";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        echo "</title>





    </head>

    <body>
        ";
        // line 15
        $this->displayBlock('body', $context, $blocks);
        // line 94
        echo "

        ";
        // line 96
        $this->displayBlock('javascripts', $context, $blocks);
        // line 101
        echo "
        ";
        // line 102
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 105
        echo "
    </body>
</html>
";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 6
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Welcome!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 15
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 16
        echo "            <div class=\"container-fluid\">

                    <nav class=\"navbar navbar-expand-md navbar-light bg-light mainNavbar \">
                        <a class=\"navbar-brand\" href=\"";
        // line 19
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("main_page");
        echo "\"><p class=\"text-white text-center\">My Photocloud</p></a>
                        <button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                            <span class=\"navbar-toggler-icon\"></span>
                        </button>

                        <div class=\" collapse navbar-collapse  \" id=\"navbarSupportedContent\">

                            <!--<div class=\"row\">-->
                             <div class=\"col-4\"></div>
                                <ul class=\"navbar-nav d-flex justify-content-center    mx-md-auto\">
                                    <li class=\"nav-item active\">
                                        <a class=\"nav-link\" href=\"";
        // line 30
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("shared_photos");
        echo "\"><p class=\"text-white\" id=\"sharedPhotos\">Shared Photos</p><span class=\"sr-only\">(current)</span></a>
                                    </li>
                                    ";
        // line 32
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
            // line 33
            echo "                                    <li class=\"nav-item\">
                                        <a class=\"nav-link\" href=\"";
            // line 34
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_admin_users");
            echo "\"><p class=\"text-white\">Users</p></a>
                                    </li>
                                    ";
        }
        // line 37
        echo "                                    <li class=\"nav-item dropdown\">
                                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                            Dropdown
                                        </a>
                                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                            <a class=\"dropdown-item\" href=\"#\">Action</a>
                                            <a class=\"dropdown-item\" href=\"#\">Another action</a>
                                            <div class=\"dropdown-divider\"></div>
                                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>
                                        </div>
                                    </li>
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>
                                    </li>


                                </ul>
                            <!--</div> -->

                            <!--<button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#endHalfNavbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                                <span class=\"navbar-toggler-icon\"></span>
                            </button>-->

                            <ul id=\"endHalfNavbar\" class=\"collapse navbar-collapse navbar-nav justify-content-end\">
                                <li id=\"js-nav-updates\">
                                    <a class=\"nav-link navbar-navlink nav-bell mt-3 mr-4\" href=\"#\">
                                        <i id=\"uploadIcon\" class=\"fas fa-upload fa-2x\" ></i>
                                        <div class=\"alert-circle\"></div>
                                    </a>
                                </li>
                                <li>";
        // line 67
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_USER")) {
            echo " <p class=\"text-white mb-0\"> ";
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 67, $this->source); })()), "user", [], "any", false, false, false, 67), "username", [], "any", false, false, false, 67), "js"), "html", null, true);
            echo "</p> ";
        }
        echo "</li>
                                <li class=\"dropdown\">
                                    <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" title=\"Account Menu\" id=\"dropdownMenuButton\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                        <img class=\"user-img\" src=\"https://static.toiimg.com/photo/72975551.cms\">
                                        <i class=\"fa fa-chevron-down pl-1\" onclick=\"\"></i>
                                    </a>
                                    <div class=\"dropdown-menu dropdown-menu-right p-0\" aria-labelledby=\"dropdownMenuButton\">
                                        <a class=\"dropdown-item\" href=\"";
        // line 74
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_update", ["id" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 74, $this->source); })()), "user", [], "any", false, false, false, 74), "id", [], "any", false, false, false, 74)]), "html", null, true);
        echo "\">My Account</a>
                                        <a class=\"dropdown-item\" href=\"#\">My Bookmarks</a>
                                        <a class=\"dropdown-item\" id=\"logout\" href=\"";
        // line 76
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
        echo "\">Sign Out</a>

                                    </div>
                                </li>
                            </ul>

                            <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">
                             <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->
                        </div>

                    </nav>




            </div>

        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 96
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 97
        echo "
";
        // line 99
        echo "
        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 102
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 104
        echo "        ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  269 => 104,  259 => 102,  248 => 99,  245 => 97,  235 => 96,  207 => 76,  202 => 74,  188 => 67,  156 => 37,  150 => 34,  147 => 33,  145 => 32,  140 => 30,  126 => 19,  121 => 16,  111 => 15,  92 => 6,  79 => 105,  77 => 102,  74 => 101,  72 => 96,  68 => 94,  66 => 15,  54 => 6,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>

        <meta charset=\"UTF-8\">
        <title>{% block title %}Welcome!{% endblock %}</title>





    </head>

    <body>
        {% block body %}
            <div class=\"container-fluid\">

                    <nav class=\"navbar navbar-expand-md navbar-light bg-light mainNavbar \">
                        <a class=\"navbar-brand\" href=\"{{ path('main_page') }}\"><p class=\"text-white text-center\">My Photocloud</p></a>
                        <button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                            <span class=\"navbar-toggler-icon\"></span>
                        </button>

                        <div class=\" collapse navbar-collapse  \" id=\"navbarSupportedContent\">

                            <!--<div class=\"row\">-->
                             <div class=\"col-4\"></div>
                                <ul class=\"navbar-nav d-flex justify-content-center    mx-md-auto\">
                                    <li class=\"nav-item active\">
                                        <a class=\"nav-link\" href=\"{{ path('shared_photos') }}\"><p class=\"text-white\" id=\"sharedPhotos\">Shared Photos</p><span class=\"sr-only\">(current)</span></a>
                                    </li>
                                    {% if is_granted(\"ROLE_ADMIN\") %}
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link\" href=\"{{ path('app_admin_users') }}\"><p class=\"text-white\">Users</p></a>
                                    </li>
                                    {% endif %}
                                    <li class=\"nav-item dropdown\">
                                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                            Dropdown
                                        </a>
                                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                            <a class=\"dropdown-item\" href=\"#\">Action</a>
                                            <a class=\"dropdown-item\" href=\"#\">Another action</a>
                                            <div class=\"dropdown-divider\"></div>
                                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>
                                        </div>
                                    </li>
                                    <li class=\"nav-item\">
                                        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>
                                    </li>


                                </ul>
                            <!--</div> -->

                            <!--<button class=\"navbar-toggler  collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#endHalfNavbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                                <span class=\"navbar-toggler-icon\"></span>
                            </button>-->

                            <ul id=\"endHalfNavbar\" class=\"collapse navbar-collapse navbar-nav justify-content-end\">
                                <li id=\"js-nav-updates\">
                                    <a class=\"nav-link navbar-navlink nav-bell mt-3 mr-4\" href=\"#\">
                                        <i id=\"uploadIcon\" class=\"fas fa-upload fa-2x\" ></i>
                                        <div class=\"alert-circle\"></div>
                                    </a>
                                </li>
                                <li>{% if is_granted(\"ROLE_USER\") %} <p class=\"text-white mb-0\"> {{ app.user.username|e('js') }}</p> {% endif %}</li>
                                <li class=\"dropdown\">
                                    <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" title=\"Account Menu\" id=\"dropdownMenuButton\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                        <img class=\"user-img\" src=\"https://static.toiimg.com/photo/72975551.cms\">
                                        <i class=\"fa fa-chevron-down pl-1\" onclick=\"\"></i>
                                    </a>
                                    <div class=\"dropdown-menu dropdown-menu-right p-0\" aria-labelledby=\"dropdownMenuButton\">
                                        <a class=\"dropdown-item\" href=\"{{ path('app_update', {'id': app.user.id} ) }}\">My Account</a>
                                        <a class=\"dropdown-item\" href=\"#\">My Bookmarks</a>
                                        <a class=\"dropdown-item\" id=\"logout\" href=\"{{ path('app_logout') }}\">Sign Out</a>

                                    </div>
                                </li>
                            </ul>

                            <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">
                             <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->
                        </div>

                    </nav>




            </div>

        {% endblock %}


        {% block javascripts %}

{# {{ encore_entry_script_tags('mainPage') }} #}

        {% endblock %}

        {% block stylesheets%}
{# {{ encore_entry_link_tags('mainPage') }} #}
        {% endblock %}

    </body>
</html>
", "base.html.twig", "/home/jakub/Downloads/backup-main/templates/base.html.twig");
    }
}
