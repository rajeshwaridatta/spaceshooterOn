#pragma strict
var p_BulletSpeed : float;
var pBShootAudio : AudioSource;

function Start () 
{
	
}

function Update () 
{
 	this.transform.Translate(Vector3.forward * Time.deltaTime * p_BulletSpeed);

}


