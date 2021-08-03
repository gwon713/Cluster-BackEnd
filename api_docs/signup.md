# SignUp

{% api-method method="post" host="https://api-cluster.kro.kr" path="/v1/user/signup?user\_social=?" %}
{% api-method-summary %}
Post Sign Up
{% endapi-method-summary %}

{% api-method-description %}
sign up api 
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="user\_social" type="string" %}
social login type\( kakao, google, github \)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="user\_email" type="string" required=false %}
user email
{% endapi-method-parameter %}

{% api-method-parameter name="user\_token" type="string" required=false %}
social login token
{% endapi-method-parameter %}

{% api-method-parameter name="user\_nickname" type="string" required=false %}
user nickname
{% endapi-method-parameter %}

{% api-method-parameter name="user\_file" type="string" required=false %}
user profile image
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-cluster.kro.kr" path="/v1/user/nickname/{:nickname}/check" %}
{% api-method-summary %}
Get NickName Check
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="user\_nickname" type="string" required=false %}
user nickname
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

