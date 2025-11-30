export const PhotoService = {
        getData() {
            return [
               
                {
                    itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria11s.jpg',
                    alt: 'Description for Image 11',
                    title: 'Title 11'
                },
                {
                     itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria12s.jpg',
                    alt: 'Description for Image 12',
                    title: 'Title 12'
                },
                {
                     itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria13s.jpg',
                    alt: 'Description for Image 13',
                    title: 'Title 13'
                },
                {
                     itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg',
                    alt: 'Description for Image 14',
                    title: 'Title 14'
                },
                {
                     itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
                    alt: 'Description for Image 15',
                    title: 'Title 15'
                },
                 {
                    itemImageSrc: "./img/puntamango02.jpg",
                    thumbnailImageSrc: 'https://primefaces.org/cdn/primereact/images/galleria/galleria15s.jpg',
                    alt: 'Description for Image 15',
                    title: 'Title 15'
                }
            ];
        },

        getImages() {
           console.log("Inicio de carga de suario");

            return Promise.resolve(this.getData());
        }
    };