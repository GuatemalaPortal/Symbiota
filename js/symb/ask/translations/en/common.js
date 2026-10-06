const verbage = {
    header: 'Hello Portal User!',
    main: (content) => `<p>The Guatemala Biodiversity Portal, and others like it, relies on a <strong>small, dedicated group of people</strong>, the Symbiota Support Hub (SSH) for website support.</p>
        <p><strong>US funding for the SSH has ended</strong>, and this small team is now maintaining <mark>52+ portals</mark> and <mark>90 million occurrence records</mark> of life on earth... and still growing!</p>
        <p><a href="${content.donate_url}" target="_blank" onclick="setDonateCookie(60*60*24*31);">Please support this portal through donations to the SSH through KU Endowment.</a> Doing so helps each collection that shares data here.</p>
        <p>Thank you very much!</p>`,
    close: 'Close',
    ask: 'Donate',
    more_ways: 'More Ways to Support the Portal'
};