'use client'
import Main from "@/components/Main";
import { useEffect, useState } from "react";
import * as Tweakpane from 'tweakpane';
import { Slider } from "@mui/material";

const KaledoscopeRandom = () => {
    const [imageUrl, setImageUrl] = useState<string>("https://upload.wikimedia.org/wikipedia/pt/2/23/Cuca.png");
    const [numSegments, setNumSegments] = useState<number>(30);
    const [ease, setEase] = useState<number>(.003);
    const [isRandom, setIsRandom] = useState<boolean>(false);

    useEffect(() => {
        // https://optical.toys/kaleidoscope/
        // took this code from https://optical.toys/js/kaleidoscope.min.js
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const defaultImg = new Image;
        defaultImg.src = imageUrl;
        let img = defaultImg;
        let pattern: CanvasPattern | null;
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        // const ease = .01;
        let timer: NodeJS.Timeout | null;
        let nextRandomPositionTime = 400;
        let radius = Math.max(window.innerWidth,window.innerHeight);
        function draw(c: number, d: number) {
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.save();
            ctx.translate(c,d);
            const b = 2 * Math.PI / numSegments;
            const a = [
                {x:0,y:0},
                {x:radius*Math.cos(0),y:radius*Math.sin(0)},
                {x:radius*Math.cos(b),y:radius*Math.sin(b)}
            ];
            for (let c = 0; c < numSegments; c++) {
                ctx.save();
                c % 2!==0 ? (ctx.rotate(b*(c-.5)),ctx.scale(1,-1),ctx.rotate(b*.5)) : ctx.rotate(b*c);
                if (pattern instanceof CanvasPattern) ctx.fillStyle = pattern;
                ctx.translate(mouseX%img.width,mouseY%img.height);
                ctx.beginPath();
                ctx.moveTo(a[0].x-mouseX%img.width,a[0].y-mouseY%img.height);
                ctx.lineTo(a[1].x-mouseX%img.width,a[1].y-mouseY%img.height);
                ctx.lineTo(a[2].x-mouseX%img.width,a[2].y-mouseY%img.height);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
            ctx.restore()
        }

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw(canvas.width/2,canvas.height/2)
        }

        function animate() {
            mouseX += (targetX-mouseX) * ease;
            mouseY += (targetY-mouseY) * ease;
            draw(canvas.width/2, canvas.height/2);
            requestAnimationFrame(animate);

            if (!timer && isRandom) {
                timer = setTimeout(() => {
                    targetX = Math.random() * window.innerWidth;
                    targetY = Math.random() * window.innerHeight;
                    timer = null;
                }, nextRandomPositionTime);
            }
        }

        window.addEventListener('resize',resizeCanvas);
        canvas.addEventListener('mousemove', a => {
            targetX = a.clientX;
            targetY = a.clientY;
        });

        canvas.addEventListener('drop', a => {
            a.preventDefault();
            const c = a.dataTransfer?.files[0];
            const b = new FileReader;
            b.onload = function(a){
                img = new Image;
                img.src = JSON.stringify(a.target?.result);
                img.onload = function() {
                    pattern = ctx.createPattern(img,'repeat');
                    resizeCanvas();
                    animate()
                }
            };
            if (c instanceof File) b.readAsDataURL(c)
        });

        canvas.addEventListener('dragover', a => {
            a.preventDefault()
        });

        defaultImg.onload = function() {
            pattern = ctx.createPattern(defaultImg,'repeat');
            resizeCanvas();
            animate()
        };

        let controlParams = { Panes: numSegments };
        const container = document.querySelector('.controls');
        if (container != undefined) {
            const pane = new Tweakpane.Pane({ container: container as HTMLElement });
            const controls = pane.addFolder({title:'Customize',expanded:!0});
            controls.addBinding(controlParams, 'Panes', { min: 4, max: 100, step: 2 }).on('change', (a: { value: number; }) => {
                setNumSegments(a.value)
            });
        }
    }, [imageUrl, numSegments, ease, isRandom]);

    const handleChangeEase = (e: Event) => {
        const { target } = e;
        if (target) 
            setEase(Number((target as HTMLButtonElement).value));
    }

	return (
		<Main>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-5xl">Kaleidoscópio</h1>
                <input type="text" placeholder="Link da imagem" onChange={e => setImageUrl(e.target.value)} value={imageUrl} />
                <input type="number" placeholder="30" onChange={e => setNumSegments(parseInt(e.target.value))} value={numSegments} />
                <Slider onChange={handleChangeEase} valueLabelDisplay="on" step={0.001} min={0.001} max={1} className="w-1/2" />
                <input type="checkbox" name="isRandom" onChange={e => setIsRandom(e.target.checked)} />
                <canvas className="w-9/12 cursor-none" id="canvas"></canvas>
            </div>
		</Main>
	);
}

export default KaledoscopeRandom;