#pragma strict
var e_BulletSpeed : float;

function Start () 
{
	
}

function Update () 
{

	this.transform.Translate(Vector3.forward * Time.deltaTime * e_BulletSpeed);
}