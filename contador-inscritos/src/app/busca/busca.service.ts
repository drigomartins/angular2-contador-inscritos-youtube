import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuscaService {

    linkUrl = 'https://www.googleapis.com/youtube/v3/search';
    key = 'AIzaSyAPaQ-a665JHmCt8b3lVYOxQzJkBZCiTwE';

    constructor(private http: HttpClient) {

    }

    getLista(channel) {
        return this.http.get(this.linkUrl,
            { params:
                { key: this.key, part: 'snippet', q: channel, type: 'channel' }
            }).toPromise();
    }

}