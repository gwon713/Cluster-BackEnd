# Login

{% api-method method="post" host="https://api-cluster.kro.kr" path="/v1/user/login?user\_social=?" %}
{% api-method-summary %}
Post login
{% endapi-method-summary %}

{% api-method-description %}
login request
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_social" type="string" required=false %}
social login type
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="user\_email" type="string" required=false %}
user email
{% endapi-method-parameter %}

{% api-method-parameter name="user\_token" type="string" required=false %}
social login token
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="post" host="https://api-cluster.kro.kr" path="/v1/user/logout" %}
{% api-method-summary %}
Post LogOut
{% endapi-method-summary %}

{% api-method-description %}
logout request
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="" type="string" required=false %}

{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

