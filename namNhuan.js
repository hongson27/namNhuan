let year = +prompt('Nhap so nam');
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            alert('Nam nhuan');
        } else {
            alert('Nam khong nhuan');
        }
    } else {
        alert('Nam nhuan');
    }
} else {
    alert('Nam khong nhuan');
}