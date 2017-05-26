var oCan=document.getElementById('mycan');
		var g=oCan.getContext('2d');
		function run(){
			var d=new Date();
			var h=d.getHours()%12;
			var m=d.getMinutes();
			var s=d.getSeconds();
			console.log(h+':'+m+'/'+s);

			g.clearRect(0,0,600,600);
			g.save();
			g.translate(300,300);
			// 表盘
			g.beginPath();
			g.fillStyle="#999999";
			g.arc(0,0,300,0,2*Math.PI,false);
			g.fill();
			

			g.beginPath();
			g.fillStyle="#fff";
			g.arc(0,0,250,0,2*Math.PI,false);
			g.fill();

			// 刻度
			for(var i=0;i<60;i++){
				g.rotate(2*Math.PI/60);
				g.beginPath();
				g.strokeStyle="blue";
				g.moveTo(0,-230);
				g.lineTo(0,-250);
				g.lineWidth=4;
				g.stroke();
			}

			// 小时刻度
			for(var i=0;i<12;i++){
				g.rotate(2*Math.PI/12);
				g.beginPath();
				g.strokeStyle="red";
				g.moveTo(0,-220);
				g.lineTo(0,-250);
				g.lineWidth=4;
				g.stroke();
			}

			// 秒针
			g.save();
			g.rotate(2*Math.PI/60*s)
			g.beginPath();
			g.strokeStyle="red";
			g.moveTo(0,0);
			g.lineTo(0,-220);
			g.lineWidth=2;
			g.stroke();
			g.restore();

			// 分针
			g.save();
			g.rotate(2*Math.PI/60*m+2*Math.PI/60/60*s);
			g.beginPath();
			g.strokeStyle="black";
			g.moveTo(0,0);
			g.lineTo(0,-200);
			g.lineWidth=4;
			g.stroke();
			g.restore();

			// 时针
			g.save();
			g.rotate(2*Math.PI/12*h+2*Math.PI/12/60*m);
			g.beginPath();
			g.strokeStyle="black";
			g.moveTo(0,0);
			g.lineTo(0,-160);
			g.lineWidth=8;
			g.stroke();
			g.restore();

			g.font="bold 44px 宋体";
			g.textAlign="center";
			g.textBaseline="middle";
			g.fillStyle="black";
			for(var i=1;i<13;i++){
				g.fillText(i,Math.cos(2*Math.PI/12*(i-3))*200,Math.sin(2*Math.PI/12*(i-3))*200);
			}
			
			// 表盘中心
			g.beginPath();
			g.fillStyle="#E5E5E5";
			g.arc(0,0,20,0,2*Math.PI,false);
			g.fill();

			g.restore();
			setTimeout(run,1000/24);
		}
		run();