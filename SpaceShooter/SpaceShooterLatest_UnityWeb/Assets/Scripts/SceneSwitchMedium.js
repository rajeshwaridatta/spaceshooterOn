#pragma strict

function Start () {

}

function Update () 
{

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("MediumScene");
    Time.timeScale = 1;
}