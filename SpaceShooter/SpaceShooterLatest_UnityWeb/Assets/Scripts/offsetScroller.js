
#pragma strict
var scrollSpeed : float ;
var rend: Renderer;

function Start () 
{
	rend = GetComponent(Renderer);
}

function Update () 
{
	var offset : float = Time.time * scrollSpeed;
    rend.material.SetTextureOffset("_MainTex", Vector2(0,offset));
}