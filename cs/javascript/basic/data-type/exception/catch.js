try {
    throw new UserError('yoxi');
} catch (err) {
    console.log(message);
}


// 模拟Error类
function UserError(message) {
    this.message = message;
    this.name = 'UserError';
}