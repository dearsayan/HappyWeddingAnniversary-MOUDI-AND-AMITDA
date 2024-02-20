// script.js
const slider = document.getElementById('slider');
const prevButton = document.querySelector('.btn.prev');
const nextButton = document.querySelector('.btn.next');

const audioElements = [
  'audio1.mp3',
  'audio2.mp3',
  'audio3.mp3',
  'audio4.mp3',
  'audio5.mp3',
  'audio6.mp3',
];

function changeContent(index) {
    let title, description;
  
    switch (index) {
      case 0:
        title = "Moudi & Amitda: Love Odyssey! 🌌💑";
        description = "🎉 Happy 2nd Marriage Anniversary, dear Moudi and esteemed Amitda! May this splendid occasion mark the continuation of your beautiful journey, filled with cherished memories and a love that deepens with each passing day.";
        break;
      case 1:
        title = "Two Years, Forever Love! 💖🎉";
        description = "🌟 On this auspicious day, may every fleeting moment be imbued with the same enchantment and significance as the day you both proclaimed your eternal love. Happy Anniversary, Moudi and Amitda!";
        break;
      case 2:
        title = "Anniversary Tapestry Unfurls. 🎨📜";
        description = "🥂 Let's raise a toast to the remarkable couple, Moudi and Amitda, whose enduring love and unwavering commitment serve as a beacon of inspiration. May your journey be adorned with countless unforgettable moments and milestones.";
        break;
      case 3:
        title = "Love Blooms, Cheers! 🌹🥂";
        description = "🌹 Happy Anniversary! May the flame of your love glow with increasing intensity, lighting up the path to a lifetime of shared dreams, mutual understanding, and unwavering support.";
        break;
      case 4:
        title = "Joyful Two-Year Symphony! 🎶💫";
        description = "💑 Two wonderful years have passed, and here's to countless more ahead! May your journey continue to be graced with love that deepens, understanding that grows, and a happiness that multiplies.";
        break;
      case 5:
        title = "Moudi, Amitda: Love Chronicles! 📖💞";
        description = "🌈 Sending heartfelt wishes for a future that mirrors the vibrancy of a rainbow—filled with colors of joy, love, and unwavering support. Happy 2nd Anniversary, Moudi and Amitda!";
        break;
      default:
        title = `Moudi, Amitda: Eternal Unity! 🔗💍 ${index + 1}💞 `;
        description = "🎊 Congratulations on reaching this magnificent milestone! May the years ahead unfold like a tapestry, woven with threads of shared experiences, challenges overcome, and love that only deepens with time.";
        break;
    }
  
    return `
      <h2 class='title'>${title}</h2>
      <p class='description'>${description}</p>
    `;
  }

function createSliderItems() {
  audioElements.forEach((audioFilename, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.style.backgroundImage = `url('image${index + 1}.jpeg')`;

    const audio = document.createElement('audio');
    audio.src = audioFilename;
    audio.loop = true;
    listItem.appendChild(audio);

    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = changeContent(index);

    listItem.appendChild(content);
    slider.appendChild(listItem);

    // Start playing the audio of the first item
    if (index === 0) {
      audio.play();
    }
  });
}

function handleNavigation(direction) {
  const items = document.querySelectorAll('.item');
  const currentItem = document.querySelector('.item');

  const currentAudio = currentItem.querySelector('audio');
  currentAudio.pause();

  if (direction === 'next') {
    slider.appendChild(items[0]);
  } else if (direction === 'prev') {
    slider.prepend(items[items.length - 1]);
  }

  const newCurrentItem = document.querySelector('.item');
  const audio = newCurrentItem.querySelector('audio');
  audio.play();
}

document.addEventListener('DOMContentLoaded', function () {
  createSliderItems();
});

prevButton.addEventListener('click', function () {
  handleNavigation('prev');
});

nextButton.addEventListener('click', function () {
  handleNavigation('next');
});
