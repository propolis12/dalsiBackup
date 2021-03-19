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

/* security/update.html.twig */
class __TwigTemplate_dc1c15c8a72699f9038306cbafbef8478a28e6341af1a0d6ba9b85d355149670 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/update.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "security/update.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "security/update.html.twig", 1);
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

        echo "Update your info";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "
    ";
        // line 7
        $this->displayParentBlock("body", $context, $blocks);
        echo "
    <div class=\"container pt-2 \">
        <div class=\"row\">
            <div class=\" col-8 offset-2 border rounded\">
                ";
        // line 14
        echo "
                ";
        // line 15
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 15, $this->source); })()), 'form_start');
        echo "
                <h1 class=\"h3 mb-3 font-weight-normal\">Update your information</h1>
                ";
        // line 21
        echo "                ";
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 21, $this->source); })()), "Username", [], "any", false, false, false, 21), 'row', ["value" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 21, $this->source); })()), "user", [], "any", false, false, false, 21), "username", [], "any", false, false, false, 21)]);
        echo "
                ";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 22, $this->source); })()), "Password", [], "any", false, false, false, 22), 'row');
        echo "
                ";
        // line 23
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 23, $this->source); })()), "email", [], "any", false, false, false, 23), 'row', ["value" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 23, $this->source); })()), "user", [], "any", false, false, false, 23), "email", [], "any", false, false, false, 23)]);
        echo "
                ";
        // line 24
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 24, $this->source); })()), "firstname", [], "any", false, false, false, 24), 'row', ["value" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 24, $this->source); })()), "user", [], "any", false, false, false, 24), "firstname", [], "any", false, false, false, 24)]);
        echo "
                ";
        // line 25
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 25, $this->source); })()), "lastname", [], "any", false, false, false, 25), 'row', ["value" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 25, $this->source); })()), "user", [], "any", false, false, false, 25), "lastname", [], "any", false, false, false, 25)]);
        echo "
                ";
        // line 27
        echo "                ";
        // line 28
        echo "                <button class=\"btn btn-lg btn-primary\" type=\"submit\">
                    Update
                </button>
                ";
        // line 31
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["updateForm"]) || array_key_exists("updateForm", $context) ? $context["updateForm"] : (function () { throw new RuntimeError('Variable "updateForm" does not exist.', 31, $this->source); })()), 'form_end');
        echo "
               ";
        // line 35
        echo "            </div>

        </div>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "security/update.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  138 => 35,  134 => 31,  129 => 28,  127 => 27,  123 => 25,  119 => 24,  115 => 23,  111 => 22,  106 => 21,  101 => 15,  98 => 14,  91 => 7,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{%  block title%}Update your info{% endblock %}

{% block body %}

    {{ parent() }}
    <div class=\"container pt-2 \">
        <div class=\"row\">
            <div class=\" col-8 offset-2 border rounded\">
                {# {% if error %}
                    <div><p>{{ error }}</p></div>
                {% endif %} #}

                {{  form_start(updateForm) }}
                <h1 class=\"h3 mb-3 font-weight-normal\">Update your information</h1>
                {# <label for=\"{{ updateForm.name.vars.value }}\"
                       class=\"{{ form.name.vars.required ? 'required' : '' }}\">
                    {{ form.name.vars.label }}
                </label> #}
                {{  form_row(updateForm.Username , { 'value' : app.user.username }) }}
                {{ form_row(updateForm.Password) }}
                {{ form_row(updateForm.email, {'value' : app.user.email }) }}
                {{ form_row(updateForm.firstname , {'value' : app.user.firstname }) }}
                {{ form_row(updateForm.lastname , {'value' : app.user.lastname }) }}
                {# {{ form_rest(updateForm) }} #}
                {# {{ form_widget(updateForm) }} #}
                <button class=\"btn btn-lg btn-primary\" type=\"submit\">
                    Update
                </button>
                {{ form_end(updateForm) }}
               {# <div class=\"sign in\">
                    <p class=\"text-right\"><a  href=\"{{ path( 'app_login' ) }}\">or Sign in</a></p>
                </div> #}
            </div>

        </div>
    </div>
{% endblock %}", "security/update.html.twig", "/home/jakub/Downloads/backup-main/templates/security/update.html.twig");
    }
}
