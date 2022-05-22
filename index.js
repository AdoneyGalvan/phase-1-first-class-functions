const receivesAFunction = (callback) => {
    return callback();
}

const callback = x => x + 2;


const returnsANamedFunction = () => {
    const test = function (){
        return 1 + 1;
    }
    return test;
}

const returnsAnAnonymousFunction = () => (() => "Hello");