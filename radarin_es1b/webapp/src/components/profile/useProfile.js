import {useLDflex} from "@solid/react";

export default (webId) => {
    const [name, namePending, nameError] = useLDflex(`[${webId}].name`);
    const [fn, fnPending, fnError] = useLDflex(`[${webId}].vcard_fn`);
    const [image, imagePending, imageError] = useLDflex(`[${webId}].image`);
    const [photo, photoPending, photoError] = useLDflex(`[${webId}].vcard_hasPhoto`);
    const pending = namePending || imagePending || fnPending || photoPending;
    const error = nameError || imageError || fnError || photoError;
    return {
        webId,
        pending,
        error,
        fullName: name || fn,
        imageSrc: image || photo
    }
}