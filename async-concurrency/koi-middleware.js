function middlewares(...fns) {
  return function (context) {

    async function start(index) {
        if(!fns[index]) {
            return
        }
        return fns[index](context, () => start(index+1));        
    }

    return start(0)

    // for (let index = 0; index < params.length; index++) {
    //   const element = params[index];
    //   const next = params[index + 1];

    //   (async function () {
    //     try {
    //       const response = await element(context, next);          
    //     } catch (error) {}
    //   })();
    // }
  };
}

async function fn1(ctx, next) {
  ctx.stack.push("fn1-start");
  await next();
  ctx.stack.push("fn1-end");
}

async function fn2(ctx, next) {
  ctx.stack.push("fn2-start");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await next();
  ctx.stack.push("fn2-end");
}

function fn3(ctx, next) {
  ctx.stack.push("fn3-start");
  next();
  ctx.stack.push("fn3-end");
}

(async () => {
  const composedFn = middlewares(fn1, fn2, fn3);

  const context = { stack: [] };

  await composedFn(context);
  console.log(context.stack);
  // ['fn1-start', 'fn2-start', 'fn3-start', 'fn3-end', 'fn2-end', 'fn1-end']
})();
