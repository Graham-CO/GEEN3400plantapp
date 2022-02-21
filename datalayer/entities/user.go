package entities

//TODO: Change User Color- how many diff. color settings need to be defined?
// iOS Device Interacts with These Values
type User struct {
	// Device	string	`json:"device"`
	UserID    string `json:"userid"`
	UserEmail string `json:"useremail"`
	UserColor []int8 `json:"usercolor"` //RGB Settings.... we may need this to be MULTIPLE colors, for each threshhold being reached
}
