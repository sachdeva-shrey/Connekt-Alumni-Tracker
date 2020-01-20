export interface Document {
    $key: string,
    firstname : string,
    lastname : string,
    regno : string,
    year : string,
    course : string,
    college : string,
    uemail : string,
    upassword : string,
}

export interface eventtype{
    $key :string,
    title: string,
    details : string,
    date : string,
    time :string,
    venue :string;
}
export interface posttype{
    $key :string,
    title : string,
    details : string
}