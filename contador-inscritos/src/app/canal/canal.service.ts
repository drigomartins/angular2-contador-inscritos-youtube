import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CanalService {

    key = 'AIzaSyAPaQ-a665JHmCt8b3lVYOxQzJkBZCiTwE';
    linkUrl2 = 'https://www.googleapis.com/youtube/v3/channels';

    constructor(private http: HttpClient) { }

    getCanal(id) {
        return this.http.get(this.linkUrl2,
            { params:
                { key: this.key, part: 'statistics', id: id }
            }).toPromise();
    }
    getNomeCanal(id) {
        return this.http.get(this.linkUrl2, 
            { params:
                { key: this.key, part: 'snippet', id: id }
            }).toPromise();
    }
}