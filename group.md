# Group

{% api-method method="get" host="https://api-cluster.kro.kr" path="/v1/groups?page=?&search\_word=?&search\_hashtag=?" %}
{% api-method-summary %}
Get GroupList
{% endapi-method-summary %}

{% api-method-description %}
get group list
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="search\_word" type="string" required=false %}
search group summary word
{% endapi-method-parameter %}

{% api-method-parameter name="search\_hashtag" type="string" required=false %}
search group hashtag
{% endapi-method-parameter %}

{% api-method-parameter name="page" type="integer" required=false %}
Set page to get
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

{% api-method method="get" host="https://api-cluster.kro.kr" path="/v1/group/detail?grp\_seq=?" %}
{% api-method-summary %}
Get Group Detail
{% endapi-method-summary %}

{% api-method-description %}
get group detail
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="grp\_seq" type="number" required=false %}
group detail grp\_seq
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
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

{% api-method method="put" host="https://api-cluster.kro.kr" path="/v1/group/liked?grp\_seq=?" %}
{% api-method-summary %}
Group liked
{% endapi-method-summary %}

{% api-method-description %}
Group liked request
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="grp\_seq" type="string" required=false %}
liked group seq
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="liked\_status" type="boolean" required=false %}
좋아요 \( 0, 1\)
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

{% api-method method="post" host="https://api-cluster.kro.kr" path="/v1/group/add" %}
{% api-method-summary %}
Group Add
{% endapi-method-summary %}

{% api-method-description %}
Group Add
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="grp\_name" type="string" required=false %}
group name
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_kind" type="string" required=false %}
group kind
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_start\_date" type="string" required=false %}
group starting date
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_place" type="string" required=false %}
group meet place
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_chat\_link" type="string" required=false %}
group open chatting link
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_total\_user" type="integer" required=false %}
group total people
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_join\_user" type="integer" required=false %}
group join people
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_about" type="string" required=false %}
group about
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_hashtag" type="string" required=false %}
group hashtag
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

{% api-method method="put" host="https://api-cluster.kro.kr" path="/v1/group/state/edit?grp\_seq=?" %}
{% api-method-summary %}
Group state edit
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="grp\_seq" type="integer" required=false %}
group seq
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="grp\_status" type="boolean" required=false %}
edit group status
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_join\_user" type="integer" required=false %}
edit join group user
{% endapi-method-parameter %}

{% api-method-parameter name="grp\_total\_user" type="integer" required=false %}
edit total group user
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

{% api-method method="put" host="https://api-cluster.kro.kr" path="/v1/group/edit?grp\_seq=?" %}
{% api-method-summary %}
Group Edit
{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="grp\_seq" type="string" required=false %}
edit group edit
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}

{% api-method-body-parameters %}
{% api-method-parameter name="grp\_name" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_kind" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_status" type="boolean" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_start\_date" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_place" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_chat\_link" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_total\_user" type="integer" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_join\_user" type="integer" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_about" type="string" required=false %}

{% endapi-method-parameter %}

{% api-method-parameter name="grp\_hashtag" type="string" required=false %}

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

