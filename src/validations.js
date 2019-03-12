import validator from 'validator';


export const formValidator = (data, currMovieList) =>{

    let yearCheck = /(\b(19|[2-9][0-9])\d{2})$/;
    let errors = {}
    let titleValidate = currMovieList.find(movie => movie.imdbId === data.imdbId)
    let titleError = null
    console.log('titleValidate: ' + JSON.stringify(titleValidate))
    console.log('title: ' + titleValidate.Title.toUpperCase().split())
    console.log('dataTitle: ' + data.Title)
    if(titleValidate.Title !== data.Title){
        if(currMovieList.some(movie => movie.Title === data.Title)){
            titleError = true

        }
        
    }
    console.log('titleError: ' + titleError)

    // console.log('validatorcurrMovieList: ' + JSON.stringify(currMovieList))
    console.log('validatordata: ' + JSON.stringify(data))

    if(validator.isEmpty(data.Title)){
        errors.Title = 'your Movie title is valuable'
    }else if(!validator.isAlpha(validator.blacklist(data.Title, (', .')))) {
        errors.Title = 'Title may contain only letters'
    }else if(titleError){
        errors.Title = 'hiiii this movie is alreay here....'
    }

    if(validator.isEmpty(data.Year)){
        errors.Year = 'your Movie year realesed is valuable'
    }else if(!yearCheck.test(data.Year)){
        errors.Year = 'movie year must be later then 1900'
    }
    
    if(validator.isEmpty(data.Genre)){
        errors.Genre = 'what about the movie genre ?'
    }else if(!validator.isAlpha(validator.blacklist(data.Genre, (', ')))) {
        errors.Genre = 'Genre may contain only letters'
    }

    if(validator.isEmpty(data.Runtime)){
        errors.Runtime = 'what about the movie Runtime?'
    }else if(!validator.isInt(data.Runtime)) {
        errors.Runtime = 'the Runtime must be in minutes only'
    }
    
    if(validator.isEmpty(data.Director)){
        errors.Director = 'what about the Director ?'
    }else if(!validator.isAlpha(validator.blacklist(data.Director, ('/ , .')))) {
        errors.Director = 'Director name may contain letters only'
    }


    return errors;
}


