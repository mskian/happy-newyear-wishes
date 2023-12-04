import slugify from 'slugify';

let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getLang = searchParams.get('en');
const getTamil = searchParams.get('ta');
const font = new FontFaceObserver('Catamaran');
if (getLang == 'en') {
    const getInput = searchParams.get('name') || 'Your Name';
    const random_id = Math.floor(1000 + Math.random() * 9000);
    const basename = 'happy-new-year-' + random_id;
    const seo_title = slugify(getInput, {
        replacement: '-',
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
        strict: false,
    });
    const userInput =
        slugify(getInput, {
            replacement: ' ',
            remove: /[*+~.()'"!:@]/g,
            lower: false,
            strict: false,
        }) || 'Your Name';
    const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, '-');
    document.getElementById('imgdata').innerHTML = `
    <div class="aspect-w-16 aspect-h-9">
                    <div style="font-family: 'Catamaran', sans-serif;">
                        <canvas
                            class="w-full"
                            id="Canvas"
                            width="1080px"
                            height="1080px"
                        ></canvas>
                    </div>
                </div>
    `;
    document.getElementById('form').innerHTML = `
<form
method="get"
action=${'/?en=en&name=' + pageCatch}
accept-charset="UTF-8"
class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
style="background-color: #94a3b8"
>
<input type="hidden" name="en" value="en" /> 
<div class="relative mt-1">
    <input
        type="text"
        id="name"
        name="name"
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg"
        placeholder="Your Name"
        maxlength="30"
        autocomplete="off"
        required
    />
</div>
<button
    type="submit"
    class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-orange-200 rounded-lg"
>
    Create Now
</button>
</form>
`;

    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?en=en&name=' + pageCatch);
    }

    const word = userInput.replace(/[-]/g, ' ');
    document
        .getElementsByTagName('meta')
        .namedItem('description')
        .setAttribute(
            'content',
            `${word} Sending you the Happy New Year Wishes Greeting image with Name - Happy New Year.`
        );
    document.title = `${word} Sending you the Happy New Year Wishes.`;

    const link = document.querySelector('link[rel="canonical"]')
        ? document.querySelector('link[rel="canonical"]')
        : document.createElement('link');
    const pathname = typeof window !== 'undefined' ? window.location.href : '';
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', pathname);
    document.head.appendChild(link);

    font.load().then(function () {
        const imageObj = new Image();
        const canvas = document.getElementById('Canvas');
        const context = canvas.getContext('2d');
        context.font = '600 40px Catamaran';
        imageObj.onload = function () {
            context.textAlign = 'center';
            context.drawImage(imageObj, 0, 0, 1080, 1080);
            context.fillStyle = '#dff9fb';
            context.fillText(word, 536, 900);
            let image = canvas.toDataURL('image/png', 0.5);
            const sharetext = encodeURIComponent(
                word +
                    ' Sending You a Happy New Year Greeting Wishes For You ' +
                    window.location.href
            );
            const Whatsappshare =
                'https://api.whatsapp.com/send?text=' + sharetext;
            const Telegramshare =
                'https://telegram.me/share/url?url=' +
                window.location.href +
                '&text=' +
                sharetext;
            if (word == 'Your Name') {
                document.getElementById('result').innerHTML = `
            <br>
            <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
            <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Whatsapp
            </a>
            <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Telegram
            </a>
            </div>`;
            } else {
                document.getElementById('result').innerHTML = `
        <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase" href="${image}" download="${basename}">⬇ Download image</a></div>
        <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
        <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
        👉 Whatsapp
        </a>
        <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
        👉 Telegram
        </a>
        </div>`;
            }
        };

        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = './happy-new-year-en-2023.png';
    });
} else if (getTamil == 'ta') {
    const getInput = searchParams.get('name') || 'Your Name';
    const random_id = Math.floor(1000 + Math.random() * 9000);
    const basename = 'happy-new-year-' + random_id;
    const seo_title = slugify(getInput, {
        replacement: '-',
        remove: /[$*_+~.()'"!\-:@]+/g,
        lower: false,
        strict: false,
    });
    const userInput =
        slugify(getInput, {
            replacement: ' ',
            remove: /[*+~.()'"!:@]/g,
            lower: false,
            strict: false,
        }) || 'Your Name';
    const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, '-');
    document.getElementById('imgdata').innerHTML = `
    <div class="aspect-w-16 aspect-h-9">
                    <div style="font-family: 'Catamaran', sans-serif;">
                        <canvas
                            class="w-full"
                            id="Canvas"
                            width="1080px"
                            height="1080px"
                        ></canvas>
                    </div>
                </div>
    `;
    document.getElementById('form').innerHTML = `
<form
method="get"
action=${'/?ta=ta&name=' + pageCatch}
accept-charset="UTF-8"
class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
style="background-color: #94a3b8"
>
<input type="hidden" name="ta" value="ta" /> 
<div class="relative mt-1">
    <input
        type="text"
        id="name"
        name="name"
        class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg"
        placeholder="Your Name"
        maxlength="30"
        autocomplete="off"
        required
    />
</div>
<button
    type="submit"
    class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-orange-200 rounded-lg"
>
    Create Now
</button>
</form>
`;

    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?ta=ta&name=' + pageCatch);
    }

    const word = userInput.replace(/[-]/g, ' ');
    document
        .getElementsByTagName('meta')
        .namedItem('description')
        .setAttribute(
            'content',
            `${word} Sending you the Happy New Year Wishes Greeting image with Name - Happy New Year.`
        );
    document.title = `${word} Sending you the Happy New Year Wishes.`;

    const link = document.querySelector('link[rel="canonical"]')
        ? document.querySelector('link[rel="canonical"]')
        : document.createElement('link');
    const pathname = typeof window !== 'undefined' ? window.location.href : '';
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', pathname);
    document.head.appendChild(link);

    font.load().then(function () {
        const imageObj = new Image();
        const canvas = document.getElementById('Canvas');
        const context = canvas.getContext('2d');
        context.font = '600 38px Catamaran';
        imageObj.onload = function () {
            context.textAlign = 'center';
            context.drawImage(imageObj, 0, 0, 1080, 1080);
            context.fillStyle = '#dff9fb';
            context.fillText(word, 536, 950);
            let image = canvas.toDataURL('image/png', 0.5);
            const sharetext = encodeURIComponent(
                word +
                    ' Sending You a Happy New Year Greeting Wishes For You ' +
                    window.location.href
            );
            const Whatsappshare =
                'https://api.whatsapp.com/send?text=' + sharetext;
            const Telegramshare =
                'https://telegram.me/share/url?url=' +
                window.location.href +
                '&text=' +
                sharetext;
            if (word == 'Your Name') {
                document.getElementById('result').innerHTML = `
                <br>
                <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
                <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
                👉 Whatsapp
                </a>
                <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
                👉 Telegram
                </a>
                </div>`;
            } else {
                document.getElementById('result').innerHTML = `
            <br><div class="flex items-center justify-center"><a class="inline-block px-10 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase" href="${image}" download="${basename}">⬇ Download image</a></div>
            <div class="flex flex-wrap mt-4 mb-8 items-center justify-center" style="overflow: auto;" role="group">
            <a target="_blank" href=${Whatsappshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-green-500 to-green-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Whatsapp
            </a>
            <a target="_blank" href=${Telegramshare} rel="nofollow noopener noreferrer" class="rounded text-white bg-gradient-to-br from-blue-500 to-blue-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase">
            👉 Telegram
            </a>
            </div>`;
            }
        };

        imageObj.setAttribute('crossOrigin', 'anonymous');
        imageObj.src = './happy-new-year-ta-2023.png';
    });
} else {
    //const box = document.getElementById('lang');
    //box.style.display = 'none';
    //window.location.replace('/?en=en&name=Happy-New-Year');
    document.getElementById('form').innerHTML = `
    <div
    class="group flex flex-col justify-between rounded-sm bg-white p-8 shadow-xl transition-shadow hover:shadow-lg"
  >
    <div>
      <h3 class="text-3xl font-bold text-indigo-600">Happy New Year 🎊</h3>
      <div class="mt-4 border-t-2 border-indigo-100 pt-2">
        <p class="text-sm font-medium uppercase tracking-widest text-gray-500">
          <br>2024 - Happy New Year Greeting Wishes image with Name - Happy New Year Greeting image Generator in Tamil and English.
        </p>
      </div>
      <div class="flex items-center justify-center mt-4 border-t-2 border-indigo-100 pt-6">
      <img class="w-80" src="/happy-new-year-4267.png" alt="Happy New Year" loading="lazy">
      </div>
      <div class="px-6 py-4 font-bold flex items-center justify-center">
      <a href="/?en=en&name=Your-Name" class="px-5 py-2 text-sm text-white bg-fuchsia-500 rounded-full">Create Now</a>
      </div>
      <div class="flex items-center justify-center mt-4 pt-2">
      <img class="w-80" src="/happy-new-year-2793.png" alt="Happy New Year" loading="lazy">
      </div>
      <div class="px-6 py-4 font-bold flex items-center justify-center">
      <a href="/?ta=ta&name=Your-Name" class="px-5 py-2 text-sm text-white bg-sky-600 rounded-full">Create Now</a>
      </div>
    </div>
  
  </div>
  
    <br>

            <div class="border-b border-gray-200 shadow-xl transition-shadow hover:shadow-lg overflow-auto">
                <table class="divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-4 py-5 font-bold p-2 border-b bg-violet-500 text-white">
                             &#169; Happy New year Wishes - new.sanweb.info
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-300">
                        <tr class="whitespace-nowrap odd:bg-gray-100 hover:!bg-stone-200">
                            <td class="bg-emerald-100 px-6 py-4 font-bold">
                               Free Happy New Year Greeting Generator.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
`;
}
