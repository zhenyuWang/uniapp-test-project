// index.js
// 获取应用实例
Page({
    data:{
        imgTop:0
    },
    onReady() {
        const query = wx.createSelectorQuery()
        query.select('#myCanvas')
            .fields({
                node: true,
                size: true
            })
            .exec((res) => {
                const canvas = res[0].node
                console.log('canvas', canvas)
                const ctx = canvas.getContext('2d')
                //   const ctx = canvas.getContext('2d',{alpha:false,willReadFrequently:true})
                console.log('ctx', ctx)
                ctx.fillStyle = '#09c'
                ctx.filter = "blur(10px)"
                ctx.fillRect(70,0,20,20)
                // ctx.fillStyle = '#09c'
                // console.log('ctx.fillStyle', ctx.fillStyle);
                // console.log('ctx.filter', ctx.filter);
                // console.log('ctx.globalAlpha', ctx.globalAlpha);
                // ctx.globalCompositeOperation = 'xor'
                // ctx.fillStyle = '#00ff00'
                // ctx.fillRect(50, 50, 100, 100)
                // ctx.font = 'ultra-condensed 20px 楷体'

                // ctx.fillText('hello world', 10, 120)
                //   const dpr = wx.getSystemInfoSync().pixelRatio
                //   canvas.width = res[0].width * dpr
                //   canvas.height = res[0].height * dpr
                //   ctx.scale(dpr, dpr)

                // ctx.fillRect(0, 0, 100, 100)
                // const gradient = ctx.createConicGradient(0, 100, 100);
                // console.log('gradient', gradient);

                // Add five color stops
                // gradient.addColorStop(0, "red");
                // gradient.addColorStop(0.25, "orange");
                // gradient.addColorStop(0.5, "yellow");
                // gradient.addColorStop(0.75, "green");
                // gradient.addColorStop(1, "blue");
                // ctx.fillStyle = gradient;
                // ctx.fillRect(200, 20, 40, 40);
                // ctx.fillRect(100,100,50,50)
                // ctx.imageSmoothingEnabled = false
                // const imageData = ctx.getImageData(100,100,20,20)
                // console.log('imageData',imageData)
                // ctx.putImageData(imageData,60,60)
                // const createImageDataRes = ctx.createImageData(10,10,imageData)
                // console.log('createImageDataRes',createImageDataRes)
                // ctx.transform(1,1,0,1,0,0)
                // ctx.transform(1,1,0,1,0,0)
                // const transformData = ctx.getTransform()
                // console.log('transformData',transformData)
                // const img = canvas.createImage()
                // console.log('img',img)
                // img.src = '../../images/logo.png'
                // img.onload = () => {
                //     console.log('image onload');
                    // setInterval(() => {
                    // setTimeout(() => {
                        // ctx.clearRect(0,0,300,150)
                        // ctx.drawImage(img, 0, this.data.imgTop, 30, 30)
                        // ctx.fillRect(100, this.data.imgTop, 30, 30)
                        // const createPatternRes = ctx.createPattern(img,'repeat')
                        // console.log('createPatternRes',createPatternRes)
                        // ctx.fillStyle = createPatternRes
                        // ctx.fillRect(200,0,40,40)
                        // this.setData({imgTop:this.data.imgTop+1})
                        // if(this.data.imgTop>=150){
                        //     this.setData({imgTop:0})
                        // }
                    // },1000/16)
                    // const pattern = ctx.createPattern(img,'repeat')
                    // console.log('pattern',pattern)
                // }

                // const attrs = ctx.getContextAttributes()
                // console.log('attrs', attrs);
                // const imageData = ctx.getImageData(0, 0, 100, 100)
                // console.log('imageData', imageData)
                // console.log('imageData.width', imageData.width)
                // console.log('transform', ctx.getTransform())
            })
    }
})