#pragma strict

function Start () {

}

function Update () 
{

}
public function loadScene( )
{
	SceneManagement.SceneManager.LoadScene("ToughScene");
    Time.timeScale = 1;
}