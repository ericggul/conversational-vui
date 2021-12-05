export function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
        if(timer){
            clearTimeout(timer);
        }
        timer = window.setTimeout(()=> func(...args), timeout);
    };
}

export function throttle(func, timeout = 500){
    let waiting = false;
    return (...args) => {
        if(!waiting){
            func(...args);
            waiting = true;
            window.setTimeout(()=> { waiting = false; }, timeout);
        }
    }
}