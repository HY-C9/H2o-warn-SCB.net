function loadFonts() {
    const fonts = [
        new FontFace('SukhumvitSetThin', 'url(assets/fonts/SukhumvitSet-Thin.woff)'),
        new FontFace('SukhumvitSetText', 'url(assets/fonts/SukhumvitSet-Text.woff)'),
        new FontFace('SukhumvitSetLight', 'url(assets/fonts/SukhumvitSet-Light.woff)'),
        new FontFace('SukhumvitSetMedium', 'url(assets/fonts/SukhumvitSet-Medium.woff)'),
        new FontFace('SukhumvitSetSemiBold', 'url(assets/fonts/SukhumvitSet-SemiBold.woff)'),
        new FontFace('SukhumvitSetBold', 'url(assets/fonts/SukhumvitSet-Bold.woff)'),
        new FontFace('SukhumvitSetExtraBold', 'url(assets/fonts/SukhumvitSet-Extra%20Bold.woff)'),
        new FontFace('SFThonburiLight', 'url(assets/fonts/SFThonburi.woff)'),
        new FontFace('SFThonburiRegular', 'url(assets/fonts/SFThonburi-Regular.woff)'),
        new FontFace('SFThonburiSemiBold', 'url(assets/fonts/SFThonburi-Semibold.woff)'),
        new FontFace('SFThonburiBold', 'url(assets/fonts/SFThonburi-Bold.woff)'),
        new FontFace('KanitThin', 'url(assets/fonts/Kanit-Thin.woff)'),
        new FontFace('KanitExtraLight', 'url(assets/fonts/Kanit-ExtraLight.woff)'),
        new FontFace('KanitLight', 'url(assets/fonts/Kanit-Light.woff)'),
        new FontFace('KanitRegular', 'url(assets/fonts/Kanit-Regular.woff)'),
        new FontFace('KanitMedium', 'url(assets/fonts/Kanit-Medium.woff)'),
        new FontFace('KanitSemiBold', 'url(assets/fonts/Kanit-SemiBold.woff)'),
        new FontFace('KanitBold', 'url(assets/fonts/Kanit-Bold.woff)'),
        new FontFace('KanitExtraBold', 'url(assets/fonts/Kanit-ExtraBold.woff)'),
        new FontFace('KanitBlack', 'url(assets/fonts/Kanit-Black.woff)'),
        new FontFace('BangkokTime1', 'url(assets/fonts/Bangkok-Time1.woff)'),
        new FontFace('BangkokTime2', 'url(assets/fonts/Bangkok-Time2.woff)'),
        new FontFace('BangkokMoney', 'url(assets/fonts/Bangkok-Money.woff)'),
        new FontFace('BangkokTime', 'url(assets/fonts/Bangkok-Time.woff)'),
        new FontFace('BangkokMoneyRegular', 'url(assets/fonts/Bangkok-Money-Regular.woff)'),
        new FontFace('BangkokMoneyMedium', 'url(assets/fonts/Bangkok-Money-Medium.woff)'),
        new FontFace('BangkokMoneySemiBold', 'url(assets/fonts/Bangkok-Money-SemiBold.woff)'),
        new FontFace('BangkokMoneyBold', 'url(assets/fonts/Bangkok-Money-Bold.woff)'),
        new FontFace('TTBMoneyRegular', 'url(assets/fonts/TTB-Money-Regular.woff)'),
        new FontFace('TTBMoneyMedium', 'url(assets/fonts/TTB-Money-Medium.woff)'),
        new FontFace('TTBMoneySemiBold', 'url(assets/fonts/TTB-Money-SemiBold.woff)'),
        new FontFace('TTBMoneyBold', 'url(assets/fonts/TTB-Money-Bold.woff)'),
        new FontFace('TTBMoneyExtraBold', 'url(assets/fonts/TTB-Money-ExtraBold.woff)'),
        new FontFace('krungsriRegular', 'url(assets/fonts/krungsri_con-webfont.woff)'),
        new FontFace('krungsriMedium', 'url(assets/fonts/krungsri_con_med-webfont.woff)'),
        new FontFace('krungsriBold', 'url(assets/fonts/krungsri_con_bol-webfont.woff)'),
        new FontFace('THSarabunRegular', 'url(assets/fonts/THSarabun.woff)'),
        new FontFace('THSarabunBold', 'url(assets/fonts/THSarabun-Bold.woff)'),
        new FontFace('THSarabunItalic', 'url(assets/fonts/THSarabun-Italic.woff)'),
        new FontFace('THSarabunBoldItalic', 'url(assets/fonts/THSarabun-BoldItalic.woff)'),
        new FontFace('THSarabunNew', 'url(assets/fonts/THSarabunNew.woff)'),
        new FontFace('THSarabunNewBold', 'url(assets/fonts/THSarabunNew-Bold.woff)'),
        new FontFace('THSarabunNewItalic', 'url(assets/fonts/THSarabunNew-Italic.woff)'),
        new FontFace('THSarabunNewBoldItalic', 'url(assets/fonts/THSarabunNew-BoldItalic.woff)'),
        new FontFace('DBHelvethaicaMonX', 'url(assets/fonts/DBHelvethaicaMonX.woff)'),
        new FontFace('DBHelvethaicaMonXCond', 'url(assets/fonts/DBHelvethaicaMonXCond.woff)'),
        new FontFace('DBHelvethaicaMonXMed', 'url(assets/fonts/DBHelvethaicaMonXMed.woff)'),
        new FontFace('DBHelvethaicaMonXMedCond', 'url(assets/fonts/DBHelvethaicaMonXMedCond.woff)'),
        new FontFace('DBHelvethaicaMonXBold', 'url(assets/fonts/DBHelvethaicaMonXBd.woff)'),
        new FontFace('DBHelvethaicaMonXBoldCond', 'url(assets/fonts/DBHelvethaicaMonXBdCond.woff)'),
        new FontFace('DBHelvethaicaMonXBlk', 'url(assets/fonts/DBHelvethaicaMonXBlk.woff)'),
        new FontFace('DXKrungthaiSemiBold', 'url(assets/fonts/DX-Krungthai-SemiBold.woff)'),
        new FontFace('DXKrungthaiThin', 'url(assets/fonts/DX-Krungthai-Thin.woff)'),
        new FontFace('DXSCB', 'url(assets/fonts/DX-SCB.woff)'),
        new FontFace('DXTTBBold', 'url(assets/fonts/DX-TTB-bold.woff)'),
        new FontFace('DXTTBRegular', 'url(assets/fonts/DX-TTB-regular.woff)'),
        new FontFace('DXKrungthaiBold', 'url(assets/fonts/DX-Krungthai-Bold.woff)'),
        new FontFace('DXKrungthaiMedium', 'url(assets/fonts/DX-Krungthai-Medium.woff)'),
        new FontFace('DXKrungthaiRegular', 'url(assets/fonts/DX-Krungthai-Regular.woff)'),
        new FontFace('TTBMoney', 'url(assets/fonts/TTB Money.woff)'),
        new FontFace('CoreSansLight', 'url(assets/fonts/Core-Sans-E-W01-35-Light.woff)'),
        new FontFace('CoreSansBold', 'url(assets/fonts/Core-Sans-N-65-Bold.woff)'),
        new FontFace('THSarabun', 'url(assets/fonts/THSarabun.woff)')
    ];

    return Promise.allSettled(fonts.map(font => font.load())).then(function(loadedFonts) {
        loadedFonts.forEach(function(result) {
            if (result.status === 'fulfilled') {
                document.fonts.add(result.value);
            }
        });
    });
}

let batteryIcon = new Image();
batteryIcon.src = 'assets/image/icon/icona.png';

batteryIcon.onload = function() {
    if (typeof window.updateDisplay === 'function') window.updateDisplay();
};

window.onload = function() {
    setCurrentDateTime();
    loadFonts().then(function() {
        document.fonts.ready.then(function() {
            updateDisplay(); 
        });
    }).catch(function() {
        updateDisplay();
    });
};

function setCurrentDateTime() {
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0]; 
    const dt = document.getElementById('datetime');
    if(dt) dt.value = formattedDate;

    const oneMinuteLater = new Date(now.getTime() + 60000); 
    const hours = oneMinuteLater.getHours().toString().padStart(2, '0');
    const minutes = oneMinuteLater.getMinutes().toString().padStart(2, '0');
    const formattedTimePlusOne = `${hours}:${minutes}`;
    
    const dtPlusOne = document.getElementById('datetime_plus_one');
    if(dtPlusOne) dtPlusOne.value = formattedTimePlusOne;
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, ' ').replace(/\./g, '');
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const day = padZero(parseInt(formattedDate.split(' ')[0]));
    const month = months[new Date(date).getMonth()];
    return `${day} ${month}`;
}

let qrCodeImage = null;
let powerSavingMode = false;

function handlePaste(event) {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const blob = items[i].getAsFile();
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = new Image();
                img.onload = function() {
                    qrCodeImage = img;
                    updateDisplay();
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(blob);
        }
    }
}

window.updateDisplay = function() {
    const datetime = document.getElementById('datetime')?.value || '-';
    const datetimePlusOne = document.getElementById('datetime_plus_one')?.value || '-';
    const batteryLevel = document.getElementById('battery')?.value || '100';
    const sendername = document.getElementById('sendername')?.value || '-';
    const senderaccount = document.getElementById('senderaccount')?.value || '-';
    const money01 = document.getElementById('money01')?.value || '-';

    const formattedDate = formatDate(datetime.substring(0, 10)); 
    const formattedTimePlusOne = datetimePlusOne; 
    
    const choose1 = document.getElementById('choose1')?.value || '-';
    let money1 = document.getElementById('money1')?.value || '-';
    const time1 = document.getElementById('time1')?.value || '-';
    
    const choose2 = document.getElementById('choose2')?.value || '-';
    let money2 = document.getElementById('money2')?.value || '-';
    const time2 = document.getElementById('time2')?.value || '-';
    
    const choose3 = document.getElementById('choose3')?.value || '-';
    let money3 = document.getElementById('money3')?.value || '-';
    const time3 = document.getElementById('time3')?.value || '-';

    if (choose1 === 'ถอนเงิน - EASY' && !money1.startsWith('-')) {
        money1 = money1.startsWith('+') ? '-' + money1.substring(1) : '-' + money1;
    } else if (choose1 === 'ฝากเงิน - EASY' && !money1.startsWith('+')) {
        money1 = money1.startsWith('-') ? '+' + money1.substring(1) : '+' + money1;
    }
    const m1Elem = document.getElementById('money1');
    if(m1Elem && document.activeElement !== m1Elem) m1Elem.value = money1;
    
    if (choose2 === 'ถอนเงิน - EASY' && !money2.startsWith('-')) {
        money2 = money2.startsWith('+') ? '-' + money2.substring(1) : '-' + money2;
    } else if (choose2 === 'ฝากเงิน - EASY' && !money2.startsWith('+')) {
        money2 = money2.startsWith('-') ? '+' + money2.substring(1) : '+' + money2;
    }
    const m2Elem = document.getElementById('money2');
    if(m2Elem && document.activeElement !== m2Elem) m2Elem.value = money2;
    
    if (choose3 === 'ถอนเงิน - EASY' && !money3.startsWith('-')) {
        money3 = money3.startsWith('+') ? '-' + money3.substring(1) : '-' + money3;
    } else if (choose3 === 'ฝากเงิน - EASY' && !money3.startsWith('+')) {
        money3 = money3.startsWith('-') ? '+' + money3.substring(1) : '+' + money3;
    }
    const m3Elem = document.getElementById('money3');
    if(m3Elem && document.activeElement !== m3Elem) m3Elem.value = money3;

    const canvas = document.getElementById('canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    const backgroundImage = new Image();
    backgroundImage.src = 'assets/image/bs/backgroundEnter-SCB1.jpg';
    
    backgroundImage.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        let textColor1 = (choose1 === 'ถอนเงิน - EASY') ? '#da0000' : '#63bb07';
        let textColor2 = (choose2 === 'ถอนเงิน - EASY') ? '#da0000' : '#63bb07';
        let textColor3 = (choose3 === 'ถอนเงิน - EASY') ? '#da0000' : '#63bb07';

        drawText(ctx, `${formattedTimePlusOne}`, 155, 60, 28, 'SFThonburiSemiBold', '#ffffff', 'right', 1.5, 3, 0, 0, 800, 0);
        
        drawText(ctx, `${sendername}`, 193.9, 262, 32, 'DBHelvethaicaMonX', '#959199', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${senderaccount}`, 193.9, 301.6, 32, 'DBHelvethaicaMonX', '#959199', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money01}`, 556, 345, 52, 'DBHelvethaicaMonXMed', '#000000', 'right', 1.5, 3, 0, 0, 800, -1.2);
        
        drawText(ctx, `${choose1}`, 80.5, 764, 37, 'DBHelvethaicaMonX', '#45424a', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money1}`, 636, 764, 37, 'DBHelvethaicaMonXMed', textColor1, 'right', 1.5, 3, 0, 0, 800, -0.50);
        drawText(ctx, `${formattedDate} - ${time1}`, 636, 803, 26.5, 'DBHelvethaicaMonX', '#959199', 'right', 1.5, 3, 0, 0, 400, 0);

        drawText(ctx, `${choose2}`, 80.5, 916.8, 37, 'DBHelvethaicaMonX', '#45424a', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money2}`, 636, 916.8, 37, 'DBHelvethaicaMonXMed', textColor2, 'right', 1.5, 3, 0, 0, 800, -0.50);
        drawText(ctx, `${formattedDate} - ${time2}`, 636, 955.9, 26.5, 'DBHelvethaicaMonX', '#959199', 'right', 1.5, 3, 0, 0, 400, 0);

        drawText(ctx, `${choose3}`, 80.5, 1069.6, 37, 'DBHelvethaicaMonX', '#45424a', 'left', 1.5, 3, 0, 0, 800, 0);
        drawText(ctx, `${money3}`, 636, 1069.6, 37, 'DBHelvethaicaMonXMed', textColor3, 'right', 1.5, 3, 0, 0, 800, -0.50);
        drawText(ctx, `${formattedDate} - ${time3}`, 636, 1108.7, 26.5, 'DBHelvethaicaMonX', '#959199', 'right', 1.5, 3, 0, 0, 400, 0);

        if (qrCodeImage) {
            ctx.drawImage(qrCodeImage, 0, 130.3, 555, 951); 
        }

        drawBattery(ctx, batteryLevel, powerSavingMode);
    };
}

function drawText(ctx, text, x, y, fontSize, fontFamily, color, align, lineHeight, maxLines, shadowColor, shadowBlur, maxWidth, letterSpacing) {
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.shadowColor = shadowColor || 'transparent';
    ctx.shadowBlur = shadowBlur || 0;

    const paragraphs = text.split('<br>');
    let currentY = y;

    paragraphs.forEach(paragraph => {
        const segmenter = new Intl.Segmenter('th', { granularity: 'word' });
        const words = [...segmenter.segment(paragraph)].map(segment => segment.segment);

        let lines = [];
        let currentLine = '';

        words.forEach((word) => {
            const testLine = currentLine + word;
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width + (testLine.length - 1) * letterSpacing;

            if (testWidth > maxWidth && currentLine !== '') {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        if (currentLine) {
            lines.push(currentLine);
        }

        lines.forEach((line, index) => {
            let currentX = x;

            if (align === 'center') {
                currentX = x - (ctx.measureText(line).width / 2) - ((line.length - 1) * letterSpacing) / 2;
            } else if (align === 'right') {
                currentX = x - ctx.measureText(line).width - ((line.length - 1) * letterSpacing);
            }

            drawTextLine(ctx, line, currentX, currentY, letterSpacing);
            currentY += lineHeight;
            if (maxLines && index >= maxLines - 1) {
                return;
            }
        });

        currentY += lineHeight;
    });
}

function drawTextLine(ctx, text, x, y, letterSpacing) {
    if (!letterSpacing) {
        ctx.fillText(text, x, y);
        return;
    }

    const segmenter = new Intl.Segmenter('th', { granularity: 'grapheme' });
    const characters = [...segmenter.segment(text)].map(segment => segment.segment);
    let currentPosition = x;

    characters.forEach((char) => {
        ctx.fillText(char, currentPosition, y);
        const charWidth = ctx.measureText(char).width;
        currentPosition += charWidth + letterSpacing;
    });
}

function drawBattery(ctx, batteryLevel, powerSavingMode) {
    ctx.lineWidth = 2; 
    ctx.strokeStyle = '#9b9b9b'; 
    ctx.fillStyle = '#ffffff'; 

    let batteryColor = '#ffffff'; 
    if (batteryLevel <= 20) {
        batteryColor = '#ff0000'; 
    } else if (powerSavingMode) {
        batteryColor = '#fccd0e'; 
    }

    const fillWidth = (batteryLevel / 100) * 46; 
    const x = 600;
    const y = 35.5;
    const height = 25.0;
    const radius = 8; 

    ctx.fillStyle = batteryColor; 

    ctx.beginPath(); 
    ctx.moveTo(x, y + radius); 
    ctx.lineTo(x, y + height - radius); 
    ctx.arcTo(x, y + height, x + radius, y + height, radius); 
    ctx.lineTo(x + fillWidth - radius, y + height); 
    ctx.arcTo(x + fillWidth, y + height, x + fillWidth, y + height - radius, radius); 
    ctx.lineTo(x + fillWidth, y + radius); 
    ctx.arcTo(x + fillWidth, y, x + fillWidth - radius, y, radius); 
    ctx.lineTo(x + radius, y); 
    ctx.arcTo(x, y, x, y + radius, radius); 
    ctx.closePath(); 
    ctx.fill(); 

    drawText(ctx, `${batteryLevel}`, x + 46 / 2, y + height / 1.26, 21, 'SFThonburiBold', '#7941c0', 'center', 1, 1, 0, 0, 100, -1);
}

window.togglePowerSavingMode = function() {
    powerSavingMode = !powerSavingMode;
    const powerSavingButton = document.getElementById('powerSavingMode');
    if(powerSavingButton) powerSavingButton.classList.toggle('active', powerSavingMode);
    updateDisplay();
}

window.updateBatteryDisplay = function() {
    const batteryLevel = document.getElementById('battery')?.value || '100';
    const bl = document.getElementById('battery-level');
    if(bl) bl.innerText = batteryLevel;
}

window.downloadImage = function() {
    const canvas = document.getElementById('canvas');
    if(!canvas) return;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'slip_scb1.png';
    link.click();
}

const genBtn = document.getElementById('generate');
if(genBtn) {
    genBtn.addEventListener('click', updateDisplay);
}

function drawImage(ctx, imageUrl, x, y, width, height) {
    const image = new Image();
    image.src = imageUrl;
    image.onload = function() {
        ctx.drawImage(image, x, y, width, height);
    };
}