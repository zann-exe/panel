const { createCanvas, loadImage } = require("canvas")

async function profileMenu(options) {
  const {
    backgroundURL,
    avatarURL,
    rankName,
    rankid,
    exp,
    requireExp,
    level,
    name,
  } = options;

  const width = 850;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, width, height);

  const background = await loadImage(backgroundURL);
  ctx.drawImage(background, 0, 0, width, height);

  const overlayX = 20;
  const overlayY = 20;
  const overlayWidth = width - 40;
  const overlayHeight = height - 40;
  const overlayRadius = 30;

  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 51, 0.7)';
  ctx.beginPath();
  ctx.moveTo(overlayX + overlayRadius, overlayY);
  ctx.arcTo(overlayX + overlayWidth, overlayY, overlayX + overlayWidth, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX + overlayWidth, overlayY + overlayHeight, overlayX, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX, overlayY + overlayHeight, overlayX, overlayY, overlayRadius);
  ctx.arcTo(overlayX, overlayY, overlayX + overlayWidth, overlayY, overlayRadius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const avatar = await loadImage(avatarURL);
  const avatarSize = 180;
  ctx.save();
  ctx.beginPath();
  ctx.arc(150, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 60, height / 2 - avatarSize / 2, avatarSize, avatarSize);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = '#003366';
  ctx.lineWidth = 6;
  ctx.stroke();

  ctx.font = 'bold 40px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'left';
  ctx.fillText(name, 280, height / 2 - 30);

  ctx.font = 'bold 28px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(`LEVEL ${level}`, 280, height / 2 + 10);

  ctx.font = 'bold 22px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(`${rankName}`, 280, height / 2 + 50);

  const barWidth = 500;
  const barHeight = 30;
  const barX = 280;
  const barY = height / 2 + 100;
  const progress = exp / requireExp;
  const barRadius = 15;

  ctx.fillStyle = '#555555';
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth, barY, barX + barWidth, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth, barY, barRadius);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#003366';
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth * progress, barY, barX + barWidth * progress, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth * progress, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth * progress, barY, barRadius);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#003366';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth, barY, barX + barWidth, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth, barY, barRadius);
  ctx.closePath();
  ctx.stroke();

  ctx.font = 'bold 20px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(`${exp} / ${requireExp}`, barX + barWidth / 2, barY + barHeight - 5);

  return canvas.toBuffer();
}

async function profileMenu50(options) {
  const {
    backgroundURL,
    avatarURL,
    rankName,
    rankid,
    exp,
    requireExp,
    level,
    name,
  } = options;

  // **Ubah ukuran canvas ke 1220x686 (16:9)**
  const width = 1220;
  const height = 686;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, width, height);

  // **Tambahkan background image**
  const background = await loadImage(backgroundURL);
  ctx.drawImage(background, 0, 0, width, height);

  // **Buat overlay transparan**
  const overlayX = 30;
  const overlayY = 30;
  const overlayWidth = width - 60;
  const overlayHeight = height - 60;
  const overlayRadius = 40;

  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 51, 0.75)';
  ctx.beginPath();
  ctx.moveTo(overlayX + overlayRadius, overlayY);
  ctx.arcTo(overlayX + overlayWidth, overlayY, overlayX + overlayWidth, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX + overlayWidth, overlayY + overlayHeight, overlayX, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX, overlayY + overlayHeight, overlayX, overlayY, overlayRadius);
  ctx.arcTo(overlayX, overlayY, overlayX + overlayWidth, overlayY, overlayRadius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // **Tambahkan avatar lebih besar**
  const avatar = await loadImage(avatarURL);
  const avatarSize = 250;
  ctx.save();
  ctx.beginPath();
  ctx.arc(200, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, 75, height / 2 - avatarSize / 2, avatarSize, avatarSize);
  ctx.restore();

  // **Beri border pada avatar**
  ctx.beginPath();
  ctx.arc(200, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = '#007acc';
  ctx.lineWidth = 8;
  ctx.stroke();

  // **Tambahkan Nama & Level**
  ctx.font = 'bold 50px Montserrat';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'left';
  ctx.fillText(name, 320, height / 2 - 40);

  ctx.font = 'bold 32px Montserrat';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(`LEVEL ${level}`, 320, height / 2 + 10);

  ctx.font = 'bold 26px Montserrat';
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText(`${rankName}`, 320, height / 2 + 60);

  // **Progress Bar**
  const barWidth = 700;
  const barHeight = 40;
  const barX = 320;
  const barY = height / 2 + 120;
  const progress = exp / requireExp;
  const barRadius = 20;

  // **Background bar (gelap)**
  ctx.fillStyle = '#333333';
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth, barY, barX + barWidth, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth, barY, barRadius);
  ctx.closePath();
  ctx.fill();

  // **Progress bar (biru cerah)**
  ctx.fillStyle = '#00aaff';
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth * progress, barY, barX + barWidth * progress, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth * progress, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth * progress, barY, barRadius);
  ctx.closePath();
  ctx.fill();

  // **Progress bar outline**
  ctx.strokeStyle = '#007acc';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(barX + barRadius, barY);
  ctx.arcTo(barX + barWidth, barY, barX + barWidth, barY + barHeight, barRadius);
  ctx.arcTo(barX + barWidth, barY + barHeight, barX, barY + barHeight, barRadius);
  ctx.arcTo(barX, barY + barHeight, barX, barY, barRadius);
  ctx.arcTo(barX, barY, barX + barWidth, barY, barRadius);
  ctx.closePath();
  ctx.stroke();

  // **Text di tengah progress bar**
  ctx.font = 'bold 24px Montserrat';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(`${exp} / ${requireExp}`, barX + barWidth / 2, barY + barHeight - 8);

  return canvas.toBuffer();
}

async function levelUp(options) {
  const { backgroundURL, avatarURL, fromLevel, toLevel, name } = options;

  const width = 600;
  const height = 150;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, width, height);

  const background = await loadImage(backgroundURL);
  ctx.drawImage(background, 0, 0, width, height);

  const overlayX = 10;
  const overlayY = 10;
  const overlayWidth = width - 20;
  const overlayHeight = height - 20;
  const overlayRadius = 40;

  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 51, 0.6)';
  ctx.beginPath();
  ctx.moveTo(overlayX + overlayRadius, overlayY);
  ctx.arcTo(overlayX + overlayWidth, overlayY, overlayX + overlayWidth, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX + overlayWidth, overlayY + overlayHeight, overlayX, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX, overlayY + overlayHeight, overlayX, overlayY, overlayRadius);
  ctx.arcTo(overlayX, overlayY, overlayX + overlayWidth, overlayY, overlayRadius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  const avatar = await loadImage(avatarURL);
  const avatarSize = 100;
  const avatarX = overlayX + overlayRadius + 10;
  ctx.save();
  ctx.beginPath();
  ctx.arc(avatarX + avatarSize / 2, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, avatarX, height / 2 - avatarSize / 2, avatarSize, avatarSize);
  ctx.restore();

  ctx.beginPath();
  ctx.arc(avatarX + avatarSize / 2, height / 2, avatarSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = '#3399FF';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = 'bold 28px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'left';
  ctx.fillText(name, avatarX + avatarSize + 20, height / 2 + 10);

  const circleSize = 55;
  const circleX1 = width - circleSize * 4 + 10;
  const circleX2 = width - circleSize * 2 - 8;
  const arrowX = circleX1 + circleSize + 10;

  ctx.beginPath();
  ctx.arc(circleX1 + circleSize / 2, height / 2, circleSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = 'rgba(51, 153, 255, 0.3)';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(circleX1 + circleSize / 2, height / 2, circleSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = '#3399FF';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(fromLevel, circleX1 + circleSize / 2, height / 2 + 8);

  ctx.beginPath();
  ctx.moveTo(arrowX, height / 2 - 8);
  ctx.lineTo(arrowX + 20, height / 2);
  ctx.lineTo(arrowX, height / 2 + 8);
  ctx.closePath();
  ctx.fillStyle = '#3399FF';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(circleX2 + circleSize / 2, height / 2, circleSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fillStyle = 'rgba(51, 153, 255, 0.3)';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(circleX2 + circleSize / 2, height / 2, circleSize / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.strokeStyle = '#3399FF';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText(toLevel, circleX2 + circleSize / 2, height / 2 + 8);

  ctx.globalCompositeOperation = 'destination-in';
  ctx.beginPath();
  ctx.moveTo(overlayX + overlayRadius, overlayY);
  ctx.arcTo(overlayX + overlayWidth, overlayY, overlayX + overlayWidth, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX + overlayWidth, overlayY + overlayHeight, overlayX, overlayY + overlayHeight, overlayRadius);
  ctx.arcTo(overlayX, overlayY + overlayHeight, overlayX, overlayY, overlayRadius);
  ctx.arcTo(overlayX, overlayY, overlayX + overlayWidth, overlayY, overlayRadius);
  ctx.closePath();
  ctx.fill();

  return canvas.toBuffer();
}

module.exports = { profileMenu, profileMenu50, levelUp }
