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

/* main_page/MainPage.html.twig */
class __TwigTemplate_d001dcbcb9db7de74fca9e54e82d6a1457843f4beaec95ca3f8ee5cab1dc4db9 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'head' => [$this, 'block_head'],
            'javascripts' => [$this, 'block_javascripts'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "main_page/MainPage.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "main_page/MainPage.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "main_page/MainPage.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 2
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello MainPageController!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 3
    public function block_head($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "head"));

        // line 4
        echo "
    <head>
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <title>mainPage</title>
    </head>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 11
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 12
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "

    ";
        // line 15
        echo "    <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js\"></script>-->
    ";
        // line 16
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("mainPage");
        echo "
    ";
        // line 18
        echo "    <!-- jQuery Custom Scroller CDN -->

    ";
        // line 20
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_USER")) {
            // line 21
            echo "        <script>
        window.username = '";
            // line 22
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 22, $this->source); })()), "user", [], "any", false, false, false, 22), "username", [], "any", false, false, false, 22), "js"), "html", null, true);
            echo "';
        window.password = '";
            // line 23
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 23, $this->source); })()), "user", [], "any", false, false, false, 23), "password", [], "any", false, false, false, 23), "js"), "html", null, true);
            echo "';
        </script>

    ";
        }
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 29
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 30
        echo "    ";
        // line 31
        echo "    <!--<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css\">-->
    ";
        // line 32
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("mainPage");
        echo "
    ";
        // line 34
        echo "    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 37
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 38
        echo "    ";
        $this->displayParentBlock("body", $context, $blocks);
        echo "
    ";
        // line 39
        echo twig_include($this->env, $context, "image/fullscreen.html.twig");
        echo "
<div class=\"wrapper\">

    <!-- Sidebar -->
    <div id=\"sidebar-wrapper\" class=\"col-2\">

        <nav id=\"sidebar\">
            <div class=\"sidebar-header\">
                <h3 id=\"sidebarHeader\">All Images</h3>
            </div>

            <ul class=\"list-unstyled components\">
                <li>
                    <a href=\"#\" id=\"loadAllImagesLi\">All images</a>
                </li>
                <li class=\"active\">
                    <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\" id=\"albumListToggler\">Albums</a>
                    <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">
                        <li id=\"createAlbumLi\">
                            <a href=\"#\">Create new <i class=\"fas fa-plus\"></i></a>
                        </li>

                        <li id=\"newAlbumLi\">
                            <input id=\"albumNameTextInput\" type=\"text\" placeholder=\"enter name\" required=\"required\">
                            <input id=\"createAlbumInputButton\" type=\"submit\" value=\"create\">
                        </li>
                    </ul>
                    <ul id=\"albumList\">

                    </ul>
                </li>


            <!--
                <li>
                    <a href=\"#\">About</a>
                </li>
                <li>
                    <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">Pages</a>
                    <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">
                        <li>
                            <a href=\"#\">Page 1</a>
                        </li>
                        <li>
                            <a href=\"#\">Page 2</a>
                        </li>
                        <li>
                            <a href=\"#\">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href=\"#\">Portfolio</a>
                </li>
                <li>
                    <a href=\"#\">Contact</a>
                </li>
               -->
            </ul>
            <!--<div class=\"row\" >
                <div class=\"col-12\" id=\"inputRow\">
                    <input type=\"text\" id=\"tags\" data-role=\"tagsinput\"/>
                </div>
            </div>-->
            <div id=\"tag-container\">
                <div id=\"forTagsSearch\"></div>
                <input placeholder=\"search for tags\" id=\"inputSearchTags\"/>
            </div>
            <input id=\"searchTagsButton\" class=\"btn btn-primary\" type=\"button\" value=\"search\">


        </nav>

    </div>




    <div id=\"content-wrapper\" class=\"col-10\">

        <div id=\"content\" class=\"container-fluid\">
            <nav id=\"editNavbar\" class=\"navbar navbar-expand-lg navbar-light bg-light\">
                <i class=\"fas fa-times fa-2x\" id=\"closeNavbar\"></i>
                <a id=\"nav-brandEditNavbar\" class=\"navbar-brand\" href=\"#\">  All images </a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>

                <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">
                    <div class=\"col-2\"></div>
                    <ul class=\"navbar-nav d-flex justify-content-start\">
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"downloadImagesNav\" href=\"#\">Download<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"deleteImagesNav\" href=\"#\">Delete<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item dropdown \">
                            <a class=\"nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                Add to album
                            </a>
                            <div id=\"addToAlbumDropdown\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                               <!-- <a class=\"dropdown-item\" href=\"#\">Action</a>
                                <a class=\"dropdown-item\" href=\"#\">Another action</a>
                                <div class=\"dropdown-divider\"></div>
                                <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->
                            </div>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"deleteOnlyFromAlbumLi\" href=\"#\">Delete from this album<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li>
                            <a  class=\"nav-link\" id=\"makePublicLi\" href=\"#\">Make public<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li>
                            <a  class=\"nav-link\" id=\"makePrivateLi\" href=\"#\">Make private<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"addTag\" href=\"#\">Add tag<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item \" id=\"addTagLi\">
                            <input id=\"addTagInput\" placeholder=\"type tags here\"
                             />
                            <input type=\"button\" id=\"addTagButton\" class=\"btn btn-primary\" value=\"Add\"/>

                        </li>



                    </ul>
                    <div id=\"forTags\" class=\"col-2\"></div>

                </div>
            </nav>
            <div class=\"row\" id=\"rowForTags\">

            </div>
            <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">
                <i id=\"collapseButton\" class=\"fas fa-arrow-circle-right\"></i>
            </button>


                    <form id=\"dropzone\" action=\"";
        // line 181
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("dropzone_upload");
        echo "\" method=\"POST\" enctype=\"multipart/form-data\" class=\"dropzone js-reference-dropzone\">
                        <input type=\"hidden\" id=\"hiddenDropzoneInput\">
                    </form>





                    <div id=\"photo-list\" class=\"row js-photo-list\" data-url=\"";
        // line 189
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("get_owned_images");
        echo "\">



                        ";
        // line 200
        echo "
                        <script>

                        </script>

                    </div>

        </div>
    </div>




</div>


    <!--<div id=\"main\"></div> -->


";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "main_page/MainPage.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  364 => 200,  357 => 189,  346 => 181,  201 => 39,  196 => 38,  186 => 37,  176 => 34,  172 => 32,  169 => 31,  167 => 30,  157 => 29,  142 => 23,  138 => 22,  135 => 21,  133 => 20,  129 => 18,  125 => 16,  122 => 15,  116 => 12,  106 => 11,  91 => 4,  81 => 3,  62 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}
{% block title %}Hello MainPageController!{% endblock %}
{% block head %}

    <head>
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
        <title>mainPage</title>
    </head>
{% endblock %}

{% block javascripts %}
    {{  parent() }}

    {# {{ encore_entry_script_tags('main') }}  #}
    <!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js\"></script>-->
    {{ encore_entry_script_tags('mainPage') }}
    {#  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.js\" integrity=\"sha256-cs4thShDfjkqFGk5s2Lxj35sgSRr4MRcyccmi0WKqCM=\" crossorigin=\"anonymous\"></script>#}
    <!-- jQuery Custom Scroller CDN -->

    {% if is_granted(\"ROLE_USER\") %}
        <script>
        window.username = '{{ app.user.username|e('js') }}';
        window.password = '{{ app.user.password|e('js') }}';
        </script>

    {%  endif %}
{% endblock %}

{% block stylesheets %}
    {# {{ encore_entry_link_tags('main') }} #}
    <!--<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css\">-->
    {{ encore_entry_link_tags('mainPage') }}
    {# <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/css/bootstrap.min.css\"> #}
    {# <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css\" integrity=\"sha256-e47xOkXs1JXFbjjpoRr1/LhVcqSzRmGmPqsrUQeVs+g=\" crossorigin=\"anonymous\" /> #}
{% endblock %}

{% block body %}
    {{ parent() }}
    {{  include('image/fullscreen.html.twig') }}
<div class=\"wrapper\">

    <!-- Sidebar -->
    <div id=\"sidebar-wrapper\" class=\"col-2\">

        <nav id=\"sidebar\">
            <div class=\"sidebar-header\">
                <h3 id=\"sidebarHeader\">All Images</h3>
            </div>

            <ul class=\"list-unstyled components\">
                <li>
                    <a href=\"#\" id=\"loadAllImagesLi\">All images</a>
                </li>
                <li class=\"active\">
                    <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\" id=\"albumListToggler\">Albums</a>
                    <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">
                        <li id=\"createAlbumLi\">
                            <a href=\"#\">Create new <i class=\"fas fa-plus\"></i></a>
                        </li>

                        <li id=\"newAlbumLi\">
                            <input id=\"albumNameTextInput\" type=\"text\" placeholder=\"enter name\" required=\"required\">
                            <input id=\"createAlbumInputButton\" type=\"submit\" value=\"create\">
                        </li>
                    </ul>
                    <ul id=\"albumList\">

                    </ul>
                </li>


            <!--
                <li>
                    <a href=\"#\">About</a>
                </li>
                <li>
                    <a href=\"#pageSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\" class=\"dropdown-toggle\">Pages</a>
                    <ul class=\"collapse list-unstyled\" id=\"pageSubmenu\">
                        <li>
                            <a href=\"#\">Page 1</a>
                        </li>
                        <li>
                            <a href=\"#\">Page 2</a>
                        </li>
                        <li>
                            <a href=\"#\">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href=\"#\">Portfolio</a>
                </li>
                <li>
                    <a href=\"#\">Contact</a>
                </li>
               -->
            </ul>
            <!--<div class=\"row\" >
                <div class=\"col-12\" id=\"inputRow\">
                    <input type=\"text\" id=\"tags\" data-role=\"tagsinput\"/>
                </div>
            </div>-->
            <div id=\"tag-container\">
                <div id=\"forTagsSearch\"></div>
                <input placeholder=\"search for tags\" id=\"inputSearchTags\"/>
            </div>
            <input id=\"searchTagsButton\" class=\"btn btn-primary\" type=\"button\" value=\"search\">


        </nav>

    </div>




    <div id=\"content-wrapper\" class=\"col-10\">

        <div id=\"content\" class=\"container-fluid\">
            <nav id=\"editNavbar\" class=\"navbar navbar-expand-lg navbar-light bg-light\">
                <i class=\"fas fa-times fa-2x\" id=\"closeNavbar\"></i>
                <a id=\"nav-brandEditNavbar\" class=\"navbar-brand\" href=\"#\">  All images </a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>

                <div class=\"collapse navbar-collapse \" id=\"navbarSupportedContent\">
                    <div class=\"col-2\"></div>
                    <ul class=\"navbar-nav d-flex justify-content-start\">
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"downloadImagesNav\" href=\"#\">Download<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"deleteImagesNav\" href=\"#\">Delete<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item dropdown \">
                            <a class=\"nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                                Add to album
                            </a>
                            <div id=\"addToAlbumDropdown\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                               <!-- <a class=\"dropdown-item\" href=\"#\">Action</a>
                                <a class=\"dropdown-item\" href=\"#\">Another action</a>
                                <div class=\"dropdown-divider\"></div>
                                <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->
                            </div>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"deleteOnlyFromAlbumLi\" href=\"#\">Delete from this album<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li>
                            <a  class=\"nav-link\" id=\"makePublicLi\" href=\"#\">Make public<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li>
                            <a  class=\"nav-link\" id=\"makePrivateLi\" href=\"#\">Make private<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item\">
                            <a class=\"nav-link\" id=\"addTag\" href=\"#\">Add tag<span class=\"sr-only\">(current)</span></a>
                        </li>
                        <li class=\"nav-item \" id=\"addTagLi\">
                            <input id=\"addTagInput\" placeholder=\"type tags here\"
                             />
                            <input type=\"button\" id=\"addTagButton\" class=\"btn btn-primary\" value=\"Add\"/>

                        </li>



                    </ul>
                    <div id=\"forTags\" class=\"col-2\"></div>

                </div>
            </nav>
            <div class=\"row\" id=\"rowForTags\">

            </div>
            <button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">
                <i id=\"collapseButton\" class=\"fas fa-arrow-circle-right\"></i>
            </button>


                    <form id=\"dropzone\" action=\"{{ path('dropzone_upload') }}\" method=\"POST\" enctype=\"multipart/form-data\" class=\"dropzone js-reference-dropzone\">
                        <input type=\"hidden\" id=\"hiddenDropzoneInput\">
                    </form>





                    <div id=\"photo-list\" class=\"row js-photo-list\" data-url=\"{{ path('get_owned_images') }}\">



                        {#  {% for image in ownedImages %}
                        <div class=\"col-2 px-0\">
                            <img class=\"card-img\"  alt=\" {{ image.filename }}\"  src=\"{{ path('send_thumbnail', { filename: image.filename}) }}\" onclick=\"window.open('{{ path('send_full_photo', { filename: image.filename}) }}')\">
                        </div>

                        {% endfor %}
                        #}

                        <script>

                        </script>

                    </div>

        </div>
    </div>




</div>


    <!--<div id=\"main\"></div> -->


{% endblock %}

{# {% block footer %}
    {{ include('footer/footer.html.twig') }}

{% endblock %}
#}
", "main_page/MainPage.html.twig", "/home/jakub/Downloads/backup-main/templates/main_page/MainPage.html.twig");
    }
}
