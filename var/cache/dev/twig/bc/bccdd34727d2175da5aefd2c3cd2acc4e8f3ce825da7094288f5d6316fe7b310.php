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

/* admin/users.html.twig */
class __TwigTemplate_d939a95f24be96f953f239bf60ea9f7d740ebc958c9c96f45a45eba52661a629 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/users.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/users.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/users.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Hello AdminController!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 5
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 6
        echo "     ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "

    ";
        // line 9
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("mainPage");
        echo "

    ";
        // line 11
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_USER")) {
            // line 12
            echo "        <script>
            window.username = '";
            // line 13
            echo twig_escape_filter($this->env, twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "user", [], "any", false, false, false, 13), "username", [], "any", false, false, false, 13), "js"), "html", null, true);
            echo "';
        </script>
    ";
        }
        // line 16
        echo "


";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 21
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 22
        echo "     ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("mainPage");
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 25
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 26
        echo " ";
        $this->displayParentBlock("body", $context, $blocks);
        echo "

    <div id=\"usersContentWrapper\">
    <table class=\"table\">
        <thead class=\"thead-dark\">
            <tr>
                <th scope=\"col\">#</th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            Username
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 39
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "ASC", "value" => "username"]), "html", null, true);
        echo "\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 40
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "DESC", "value" => "username"]), "html", null, true);
        echo "\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            First name
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 50
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "ASC", "value" => "firstname"]), "html", null, true);
        echo "\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 51
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "DESC", "value" => "firstname"]), "html", null, true);
        echo "\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            Last name
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 61
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "ASC", "value" => "lastname"]), "html", null, true);
        echo "\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 62
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "DESC", "value" => "lastname"]), "html", null, true);
        echo "\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            email
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 72
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "ASC", "value" => "email"]), "html", null, true);
        echo "\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"";
        // line 73
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("sort_by_value", ["order" => "DESC", "value" => "email"]), "html", null, true);
        echo "\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">delete</th>
            </tr>
        </thead>
        <tbody>

            <!--<th scope=\"row\">1</th>-->
            ";
        // line 83
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["users"]) || array_key_exists("users", $context) ? $context["users"] : (function () { throw new RuntimeError('Variable "users" does not exist.', 83, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["user"]) {
            // line 84
            echo "        <tr>
            <td>";
            // line 85
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 85), "html", null, true);
            echo "</td>
            <td>";
            // line 86
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "username", [], "any", false, false, false, 86), "html", null, true);
            echo "</td>
            <td>";
            // line 87
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "firstname", [], "any", false, false, false, 87), "html", null, true);
            echo "</td>
            <td>";
            // line 88
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "lastname", [], "any", false, false, false, 88), "html", null, true);
            echo "</td>
            <td>";
            // line 89
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["user"], "email", [], "any", false, false, false, 89), "html", null, true);
            echo "</td>
            <td ><a class=\"deleteUser\" href=\"";
            // line 90
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("delete_user", ["id" => twig_get_attribute($this->env, $this->source, $context["user"], "id", [], "any", false, false, false, 90)]), "html", null, true);
            echo "\" >X</a></td>
        </tr>

            ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['user'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 94
        echo "
        </tbody>
    </table>


    </div>

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/users.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  281 => 94,  271 => 90,  267 => 89,  263 => 88,  259 => 87,  255 => 86,  251 => 85,  248 => 84,  244 => 83,  231 => 73,  227 => 72,  214 => 62,  210 => 61,  197 => 51,  193 => 50,  180 => 40,  176 => 39,  159 => 26,  149 => 25,  136 => 22,  126 => 21,  113 => 16,  107 => 13,  104 => 12,  102 => 11,  96 => 9,  90 => 6,  80 => 5,  61 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello AdminController!{% endblock %}

{% block javascripts %}
     {{  parent() }}

    {# {{ encore_entry_script_tags('main') }}  #}
    {{ encore_entry_script_tags('mainPage') }}

    {% if is_granted(\"ROLE_USER\") %}
        <script>
            window.username = '{{ app.user.username|e('js') }}';
        </script>
    {%  endif %}



{% endblock %}

{% block stylesheets %}
     {{ encore_entry_link_tags('mainPage') }}
{% endblock %}

{% block body %}
 {{ parent() }}

    <div id=\"usersContentWrapper\">
    <table class=\"table\">
        <thead class=\"thead-dark\">
            <tr>
                <th scope=\"col\">#</th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            Username
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'ASC', 'value':'username'} ) }}\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'DESC', 'value':'username'} ) }}\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            First name
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'ASC', 'value':'firstname'} ) }}\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'DESC', 'value':'firstname'} ) }}\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            Last name
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'ASC', 'value':'lastname'} ) }}\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'DESC', 'value':'lastname'} ) }}\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">
                    <div class=\"dropdown\">
                        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">
                            email
                        </button>
                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'ASC', 'value':'email'} ) }}\">A-Z</a>
                            <a class=\"dropdown-item sortByUsername\" href=\"{{ path('sort_by_value', {'order':'DESC', 'value':'email'} ) }}\">Z-A</a>
                        </div>
                    </div>
                </th>
                <th scope=\"col\">delete</th>
            </tr>
        </thead>
        <tbody>

            <!--<th scope=\"row\">1</th>-->
            {%  for user in users %}
        <tr>
            <td>{{  user.id  }}</td>
            <td>{{  user.username  }}</td>
            <td>{{  user.firstname  }}</td>
            <td>{{  user.lastname  }}</td>
            <td>{{  user.email  }}</td>
            <td ><a class=\"deleteUser\" href=\"{{ path('delete_user', {'id': user.id} ) }}\" >X</a></td>
        </tr>

            {% endfor %}

        </tbody>
    </table>


    </div>

{% endblock %}
", "admin/users.html.twig", "/home/jakub/Downloads/backup-main/templates/admin/users.html.twig");
    }
}
