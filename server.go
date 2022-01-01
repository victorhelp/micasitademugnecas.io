
package main

import (
	"net/http"
)

func main(){
	static := http.FileServer(http.Dir("./static"))
	http.Handle("/",static)

	http.ListenAndServe(":8081",nil)
}

